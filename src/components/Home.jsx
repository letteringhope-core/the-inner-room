import { useNavigate } from 'react-router-dom'

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
// Placeholder: replace with real streak/note data pulled from Firestore
const monthDays = Array.from({ length: 7 }, (_, i) => ({
  date: 9 + i,
  hasEntry: i < 3 || i === 4,
  isToday: i === 6
}))

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="screen">
      <div className="card" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 6px' }}>
          Today's scripture
        </p>
        <p className="serif" style={{ fontSize: 18, margin: 0, lineHeight: 1.4 }}>
          Be still, and know that I am God. — Psalm 46:10
        </p>
      </div>

      <div className="two-col">
        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 13, margin: '0 0 6px' }}>
            🔥 12 day streak
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: 0 }}>
            Keep showing up daily
          </p>
        </div>

        <div className="card">
          <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: '0 0 10px' }}>
            This month
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6, marginBottom: 8 }}>
            {days.map((d, i) => (
              <span key={i} style={{ fontSize: 10, color: 'var(--text-faint)', textAlign: 'center' }}>{d}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 6 }}>
            {monthDays.map((day) => (
              <button
                key={day.date}
                onClick={() => navigate(`/notes?date=${day.date}`)}
                style={{
                  aspectRatio: '1',
                  border: day.isToday ? '0.5px solid #2ED8A7' : 'none',
                  borderRadius: 6,
                  background: day.hasEntry ? '#2ED8A7' : '#1C1C1C',
                  color: day.hasEntry ? '#04342C' : '#F5F5F5',
                  fontSize: 11,
                  cursor: 'pointer'
                }}
              >
                {day.date}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
