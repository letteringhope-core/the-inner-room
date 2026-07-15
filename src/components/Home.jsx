import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db, auth } from '../firebase.js'
import { verseOfTheDay } from '../data/verses.js'
import { toDateKey } from '../lib/date.js'

const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

function computeStreak(activeDates, today) {
  let streak = 0
  const cursor = new Date(today)
  while (activeDates.has(toDateKey(cursor))) {
    streak += 1
    cursor.setDate(cursor.getDate() - 1)
  }
  return streak
}

export default function Home() {
  const navigate = useNavigate()
  const verse = verseOfTheDay()
  const [noteDates, setNoteDates] = useState(new Set())
  const [logDates, setLogDates] = useState(new Set())
  const uid = auth.currentUser?.uid

  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const todayKey = toDateKey(today)
  const monthLabel = today.toLocaleDateString(undefined, { month: 'long' })
  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const leadingBlanks = new Date(year, month, 1).getDay()

  useEffect(() => {
    if (!uid) return
    const q = query(collection(db, 'notes'), where('uid', '==', uid))
    return onSnapshot(q, (snapshot) => {
      const dates = new Set()
      snapshot.forEach((d) => {
        if (d.data().date) dates.add(d.data().date)
      })
      setNoteDates(dates)
    })
  }, [uid])

  useEffect(() => {
    if (!uid) return
    const q = query(collection(db, 'dayLogs'), where('uid', '==', uid))
    return onSnapshot(q, (snapshot) => {
      const dates = new Set()
      snapshot.forEach((d) => {
        const data = d.data()
        if (data.date && (data.mood || data.health)) dates.add(data.date)
      })
      setLogDates(dates)
    })
  }, [uid])

  const activeDates = new Set([...noteDates, ...logDates])
  const streak = computeStreak(activeDates, today)

  const cells = [
    ...Array.from({ length: leadingBlanks }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1)
  ]

  return (
    <div className="screen">
      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 6px' }}>
          Today's scripture
        </p>
        <p className="serif" style={{ fontSize: 18, margin: 0, lineHeight: 1.4 }}>
          {verse.text} — {verse.ref}
        </p>
      </div>

      <div className="two-col">
        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 13, margin: '0 0 6px' }}>
            🔥 {streak} day{streak === 1 ? '' : 's'} streak
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: 0 }}>
            {streak > 0 ? 'Keep showing up daily' : 'Log a note or a check-in today to start your streak'}
          </p>
        </div>

        <div className="card">
          <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 10px' }}>
            {monthLabel}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginBottom: 8 }}>
            {weekdayLabels.map((d, i) => (
              <span key={i} style={{ fontSize: 10, color: 'var(--text-faint)', textAlign: 'center' }}>{d}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
            {cells.map((day, i) => {
              if (day === null) return <span key={`blank-${i}`} />
              const dateKey = `${monthPrefix}-${String(day).padStart(2, '0')}`
              const hasEntry = activeDates.has(dateKey)
              const isToday = dateKey === todayKey
              return (
                <button
                  key={dateKey}
                  onClick={() => navigate(`/notes?date=${dateKey}`)}
                  style={{
                    aspectRatio: '1',
                    border: isToday ? '0.5px solid #2ED8A7' : 'none',
                    borderRadius: 6,
                    background: hasEntry ? '#2ED8A7' : '#1C1C1C',
                    color: hasEntry ? '#04342C' : '#F5F5F5',
                    fontSize: 11,
                    cursor: 'pointer'
                  }}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
