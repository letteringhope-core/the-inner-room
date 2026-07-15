import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { signOut } from 'firebase/auth'
import { db, auth } from '../firebase.js'
import { toDateKey } from '../lib/date.js'

const moods = [
  { key: 'amazing', label: 'Amazing', emoji: '🤩' },
  { key: 'good', label: 'Good', emoji: '🙂' },
  { key: 'meh', label: 'Meh', emoji: '😐' },
  { key: 'bad', label: 'Bad', emoji: '☹️' },
  { key: 'awful', label: 'Awful', emoji: '😞' }
]

const healthOptions = [
  { key: 'healthy', label: 'Healthy', emoji: '💪' },
  { key: 'tired', label: 'Tired', emoji: '🥱' },
  { key: 'sick', label: 'Sick', emoji: '🤒' }
]

const genders = ['Female', 'Male', 'Other', 'Prefer not to say']

const fieldStyle = {
  width: '100%',
  background: '#0B0B0B',
  border: '0.5px solid var(--border)',
  borderRadius: 8,
  padding: 10,
  color: 'var(--text)',
  fontSize: 13
}

export default function Profile() {
  const navigate = useNavigate()
  const uid = auth.currentUser?.uid
  const todayKey = toDateKey(new Date())

  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [loading, setLoading] = useState(true)
  const [profileSaved, setProfileSaved] = useState(false)

  const [mood, setMood] = useState(null)
  const [health, setHealth] = useState(null)

  useEffect(() => {
    if (!uid) return
    Promise.all([
      getDoc(doc(db, 'users', uid)),
      getDoc(doc(db, 'dayLogs', `${uid}_${todayKey}`))
    ])
      .then(([userSnap, logSnap]) => {
        if (userSnap.exists()) {
          const data = userSnap.data()
          setName(data.name || '')
          setGender(data.gender || '')
          setAge(data.age || '')
        }
        if (logSnap.exists()) {
          setMood(logSnap.data().mood || null)
          setHealth(logSnap.data().health || null)
        }
      })
      .catch((err) => console.error('Failed to load profile:', err))
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid])

  async function saveProfile() {
    await setDoc(doc(db, 'users', uid), { name, gender, age, updatedAt: serverTimestamp() }, { merge: true })
    setProfileSaved(true)
  }

  async function logDay(next) {
    const nextMood = next.mood ?? mood
    const nextHealth = next.health ?? health
    setMood(nextMood)
    setHealth(nextHealth)
    await setDoc(
      doc(db, 'dayLogs', `${uid}_${todayKey}`),
      { uid, date: todayKey, mood: nextMood, health: nextHealth, updatedAt: serverTimestamp() },
      { merge: true }
    )
  }

  async function handleSignOut() {
    if (!confirm('Sign out?')) return
    await signOut(auth)
    navigate('/')
  }

  if (loading) {
    return (
      <div className="screen">
        <p style={{ fontSize: 12, color: 'var(--text-faint)' }}>Loading...</p>
      </div>
    )
  }

  return (
    <div className="screen">
      <p style={{ fontSize: 15, margin: '0 0 16px', fontWeight: 500 }}>Profile</p>

      <div className="card" style={{ marginBottom: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Name</p>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value)
              setProfileSaved(false)
            }}
            placeholder="Your name"
            style={fieldStyle}
          />
        </div>
        <div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Gender</p>
          <select
            value={gender}
            onChange={(e) => {
              setGender(e.target.value)
              setProfileSaved(false)
            }}
            style={fieldStyle}
          >
            <option value="">Select...</option>
            {genders.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
        <div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Age</p>
          <input
            type="number"
            min="0"
            value={age}
            onChange={(e) => {
              setAge(e.target.value)
              setProfileSaved(false)
            }}
            placeholder="Your age"
            style={fieldStyle}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }}>
          {profileSaved && <span style={{ fontSize: 11, color: 'var(--text-faint)' }}>Saved</span>}
          <button className="btn-accent" onClick={saveProfile}>Save profile</button>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 10px' }}>Today's mood</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {moods.map((m) => (
            <button
              key={m.key}
              onClick={() => logDay({ mood: m.key })}
              className="pill"
              style={{
                background: mood === m.key ? 'var(--accent)' : 'none',
                color: mood === m.key ? 'var(--accent-dark)' : 'var(--accent)',
                cursor: 'pointer'
              }}
            >
              {m.emoji} {m.label}
            </button>
          ))}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 10px' }}>Today's health</p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {healthOptions.map((h) => (
            <button
              key={h.key}
              onClick={() => logDay({ health: h.key })}
              className="pill"
              style={{
                background: health === h.key ? 'var(--accent)' : 'none',
                color: health === h.key ? 'var(--accent-dark)' : 'var(--accent)',
                cursor: 'pointer'
              }}
            >
              {h.emoji} {h.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={handleSignOut}
        style={{
          width: '100%',
          background: 'none',
          border: '0.5px solid var(--border)',
          borderRadius: 20,
          padding: '10px 18px',
          color: '#E85D5D',
          fontSize: 13,
          cursor: 'pointer'
        }}
      >
        Sign out
      </button>
    </div>
  )
}
