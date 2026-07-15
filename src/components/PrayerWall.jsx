import { useState } from 'react'

// Placeholder data - replace with a live Firestore query, ordered by createdAt desc
const initialPosts = [
  { id: 1, text: 'Struggling with anxiety before exams. Please pray for peace.', author: 'Anonymous', praying: 24 },
  { id: 2, text: 'My grandmother is in the hospital. Asking for healing.', author: 'Priya', praying: 41 }
]

export default function PrayerWall() {
  const [posts, setPosts] = useState(initialPosts)
  const [draft, setDraft] = useState('')

  function pray(id) {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, praying: p.praying + 1 } : p)))
    // TODO: write this reaction to Firestore, one per user per post
  }

  function report(id) {
    // TODO: flag this post in Firestore for moderator review, don't delete client-side
    alert('Post reported. A moderator will review it.')
  }

  function submitPost() {
    if (!draft.trim()) return
    // TODO: run draft through a basic content filter before writing to Firestore
    setPosts((prev) => [{ id: Date.now(), text: draft, author: 'You', praying: 0 }, ...prev])
    setDraft('')
  }

  return (
    <div className="screen">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <p style={{ fontSize: 15, margin: 0, fontWeight: 500 }}>Prayer wall</p>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Share a prayer request..."
          rows={3}
          style={{
            width: '100%',
            background: 'transparent',
            color: 'var(--text)',
            border: 'none',
            resize: 'none',
            fontSize: 13,
            outline: 'none'
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button className="btn-accent" onClick={submitPost}>Post</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {posts.map((post) => (
          <div key={post.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <p style={{ fontSize: 12, margin: '0 0 8px', lineHeight: 1.4, flex: 1 }}>{post.text}</p>
              <button
                onClick={() => report(post.id)}
                aria-label="Report post"
                style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', marginLeft: 8 }}
              >
                ⚑
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: 'var(--text-faint)' }}>{post.author}</span>
              <button onClick={() => pray(post.id)} className="pill" style={{ background: 'none', cursor: 'pointer' }}>
                🙏 {post.praying} praying
              </button>
            </div>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 10, color: 'var(--text-faint)', textAlign: 'center', marginTop: 16 }}>
        In crisis? <a href="/help" style={{ color: 'var(--accent)' }}>Get support now</a>
      </p>
    </div>
  )
}
