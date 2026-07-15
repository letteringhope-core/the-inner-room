import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Notes() {
  const [params] = useSearchParams()
  const date = params.get('date') || new Date().getDate()
  const [reflection, setReflection] = useState('')

  function save() {
    // TODO: write { date, reflection, userId } to Firestore
    alert('Note saved')
  }

  return (
    <div className="screen">
      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 2px' }}>Jul {date}</p>
      <p style={{ fontSize: 15, margin: '0 0 16px', fontWeight: 500 }}>Today's notes</p>

      <div className="card" style={{ marginBottom: 12 }}>
        <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 4px' }}>Passage</p>
        <p className="serif" style={{ fontSize: 13, margin: 0, lineHeight: 1.5 }}>
          Be still, and know that I am God. Psalm 46:10
        </p>
      </div>

      <p style={{ fontSize: 11, color: 'var(--text-muted)', margin: '0 0 6px' }}>My reflection</p>
      <div className="card" style={{ minHeight: 100 }}>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
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
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
        <button className="btn-accent" onClick={save}>Save</button>
      </div>
    </div>
  )
}
