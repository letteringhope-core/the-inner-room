import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { collection, addDoc, doc, getDoc, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore'
import { db, auth } from '../firebase.js'
import { verses, verseOfTheDay } from '../data/verses.js'
import { toDateKey, fromDateKey, formatDateLabel } from '../lib/date.js'

const moodLabels = { amazing: '🤩 Amazing', good: '🙂 Good', meh: '😐 Meh', bad: '☹️ Bad', awful: '😞 Awful' }
const healthLabels = { healthy: '💪 Healthy', tired: '🥱 Tired', sick: '🤒 Sick' }

export default function Notes() {
  const [params] = useSearchParams()
  const dateKey = params.get('date') || toDateKey(new Date())
  const uid = auth.currentUser?.uid
  const defaultVerse = verseOfTheDay(fromDateKey(dateKey))

  const [entries, setEntries] = useState([])
  const [reflection, setReflection] = useState('')
  const [passageRef, setPassageRef] = useState(defaultVerse.ref)
  const [dayLog, setDayLog] = useState(null)
  const [loadingLog, setLoadingLog] = useState(true)

  useEffect(() => {
    setPassageRef(defaultVerse.ref)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateKey])

  useEffect(() => {
    if (!uid) return
    const q = query(collection(db, 'notes'), where('uid', '==', uid), where('date', '==', dateKey))
    return onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
      list.sort((a, b) => (a.createdAt?.toMillis?.() || 0) - (b.createdAt?.toMillis?.() || 0))
      setEntries(list)
    })
  }, [uid, dateKey])

  useEffect(() => {
    if (!uid) return
    let active = true
    setLoadingLog(true)
    getDoc(doc(db, 'dayLogs', `${uid}_${dateKey}`))
      .then((snap) => {
        if (active) setDayLog(snap.exists() ? snap.data() : null)
      })
      .catch((err) => console.error('Failed to load day log:', err))
      .finally(() => {
        if (active) setLoadingLog(false)
      })
    return () => {
      active = false
    }
  }, [uid, dateKey])

  async function addNote() {
    if (!reflection.trim()) return
    const passage = verses.find((v) => v.ref === passageRef) || defaultVerse
    await addDoc(collection(db, 'notes'), {
      uid,
      date: dateKey,
      passageRef: passage.ref,
      passageText: passage.text,
      reflection: reflection.trim(),
      createdAt: serverTimestamp()
    })
    setReflection('')
  }

  return (
    <div className="screen">
      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 2px' }}>{formatDateLabel(dateKey)}</p>
      <p style={{ fontSize: 15, margin: '0 0 16px', fontWeight: 500 }}>Day view</p>

      <div className="two-col" style={{ marginBottom: 16 }}>
        <div className="card" style={{ marginBottom: 12 }}>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Mood</p>
          <p style={{ fontSize: 13, margin: 0 }}>
            {loadingLog ? '...' : dayLog?.mood ? moodLabels[dayLog.mood] : 'Not logged'}
          </p>
        </div>
        <div className="card">
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Health</p>
          <p style={{ fontSize: 13, margin: 0 }}>
            {loadingLog ? '...' : dayLog?.health ? healthLabels[dayLog.health] : 'Not logged'}
          </p>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Scripture of the day</p>
        <p className="serif" style={{ fontSize: 13, margin: 0, lineHeight: 1.5 }}>
          {defaultVerse.text} {defaultVerse.ref}
        </p>
      </div>

      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 6px' }}>Add a note</p>
      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 10, color: 'var(--text-muted)', margin: '0 0 4px' }}>Passage</p>
        <select
          value={passageRef}
          onChange={(e) => setPassageRef(e.target.value)}
          style={{
            width: '100%',
            background: '#0B0B0B',
            border: '0.5px solid var(--border)',
            borderRadius: 8,
            padding: 8,
            color: 'var(--text)',
            fontSize: 12,
            marginBottom: 10
          }}
        >
          {verses.map((v) => (
            <option key={v.ref} value={v.ref}>{v.ref}</option>
          ))}
        </select>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Write what stood out to you today..."
          rows={4}
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
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-accent" onClick={addNote}>Add note</button>
        </div>
      </div>

      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 6px' }}>
        Notes for this day{entries.length > 0 ? ` (${entries.length})` : ''}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {entries.map((entry) => (
          <div key={entry.id} className="card">
            <p style={{ fontSize: 10, color: 'var(--accent)', margin: '0 0 6px' }}>{entry.passageRef}</p>
            <p style={{ fontSize: 12, margin: 0, lineHeight: 1.4 }}>{entry.reflection}</p>
          </div>
        ))}
        {entries.length === 0 && (
          <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center' }}>
            No notes yet for this day.
          </p>
        )}
      </div>
    </div>
  )
}
