import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../firebase.js'
import { verseOfTheDay } from '../data/verses.js'
import { toDateKey, fromDateKey, formatDateLabel } from '../lib/date.js'

export default function Notes() {
  const [params] = useSearchParams()
  const dateKey = params.get('date') || toDateKey(new Date())
  const [reflection, setReflection] = useState('')
  const [loading, setLoading] = useState(true)
  const [saved, setSaved] = useState(false)
  const uid = auth.currentUser?.uid
  const verse = verseOfTheDay(fromDateKey(dateKey))

  useEffect(() => {
    let active = true
    setLoading(true)
    setSaved(false)
    getDoc(doc(db, 'notes', `${uid}_${dateKey}`))
      .then((snap) => {
        if (!active) return
        setReflection(snap.exists() ? snap.data().reflection : '')
      })
      .catch((err) => console.error('Failed to load note:', err))
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => {
      active = false
    }
  }, [uid, dateKey])

  async function save() {
    await setDoc(doc(db, 'notes', `${uid}_${dateKey}`), {
      uid,
      date: dateKey,
      reflection,
      updatedAt: serverTimestamp()
    })
    setSaved(true)
  }

  return (
    <div className="screen">
      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 2px' }}>{formatDateLabel(dateKey)}</p>
      <p style={{ fontSize: 15, margin: '0 0 16px', fontWeight: 500 }}>Today's notes</p>

      <div className="card" style={{ marginBottom: 12 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Passage</p>
        <p className="serif" style={{ fontSize: 13, margin: 0, lineHeight: 1.5 }}>
          {verse.text} {verse.ref}
        </p>
      </div>

      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 6px' }}>My reflection</p>
      <div className="card" style={{ minHeight: 100 }}>
        {loading ? (
          <p style={{ fontSize: 12, color: 'var(--text-faint)', margin: 0 }}>Loading...</p>
        ) : (
          <textarea
            value={reflection}
            onChange={(e) => {
              setReflection(e.target.value)
              setSaved(false)
            }}
            placeholder="Write what stood out to you today..."
            rows={5}
            style={{
              width: '100%',
              background: 'transparent',
              color: 'var(--text)',
              border: 'none',
              resize: 'none',
              fontSize: 12,
              outline: 'none'
            }}
          />
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10, marginTop: 10 }}>
        {saved && <span style={{ fontSize: 11, color: 'var(--text-faint)' }}>Saved</span>}
        <button className="btn-accent" onClick={save} disabled={loading}>Save</button>
      </div>
    </div>
  )
}
