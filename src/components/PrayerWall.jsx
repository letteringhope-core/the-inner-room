import { useEffect, useState } from 'react'
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  runTransaction,
  arrayUnion,
  arrayRemove,
  increment
} from 'firebase/firestore'
import { db, auth } from '../firebase.js'

function displayNameFor(user) {
  if (user?.displayName) return user.displayName
  if (user?.email) return user.email.split('@')[0]
  return 'Someone'
}

export default function PrayerWall() {
  const [posts, setPosts] = useState([])
  const [draft, setDraft] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const uid = auth.currentUser?.uid

  useEffect(() => {
    const q = query(collection(db, 'prayers'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })))
    })
    return unsubscribe
  }, [])

  async function pray(post) {
    const ref = doc(db, 'prayers', post.id)
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(ref)
      const prayedBy = snap.data()?.prayedBy || []
      if (prayedBy.includes(uid)) {
        tx.update(ref, { prayedBy: arrayRemove(uid), praying: increment(-1) })
      } else {
        tx.update(ref, { prayedBy: arrayUnion(uid), praying: increment(1) })
      }
    })
  }

  function report() {
    // TODO: flag this post in Firestore for moderator review, don't delete client-side
    alert('Post reported. A moderator will review it.')
  }

  async function removePost(id) {
    if (!confirm('Delete this prayer? This cannot be undone.')) return
    await deleteDoc(doc(db, 'prayers', id))
  }

  async function submitPost() {
    if (!draft.trim()) return
    await addDoc(collection(db, 'prayers'), {
      text: draft.trim(),
      uid,
      author: anonymous ? 'Anonymous' : displayNameFor(auth.currentUser),
      anonymous,
      praying: 0,
      prayedBy: [],
      createdAt: serverTimestamp()
    })
    setDraft('')
    setAnonymous(false)
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--text-muted)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
            />
            Post anonymously
          </label>
          <button className="btn-accent" onClick={submitPost}>Post</button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {posts.map((post) => {
          const isOwn = post.uid === uid
          const hasPrayed = (post.prayedBy || []).includes(uid)
          return (
            <div key={post.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <p style={{ fontSize: 12, margin: '0 0 8px', lineHeight: 1.4, flex: 1 }}>{post.text}</p>
                <button
                  onClick={() => (isOwn ? removePost(post.id) : report(post.id))}
                  aria-label={isOwn ? 'Delete post' : 'Report post'}
                  style={{ background: 'none', border: 'none', color: 'var(--text-faint)', cursor: 'pointer', marginLeft: 8 }}
                >
                  {isOwn ? '🗑' : '⚑'}
                </button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 10, color: 'var(--text-faint)' }}>
                  {post.anonymous ? 'Anonymous' : post.author}
                </span>
                <button
                  onClick={() => pray(post)}
                  className="pill"
                  style={{
                    background: hasPrayed ? 'var(--accent)' : 'none',
                    color: hasPrayed ? 'var(--accent-dark)' : 'var(--accent)',
                    cursor: 'pointer'
                  }}
                >
                  🙏 {post.praying || 0} praying
                </button>
              </div>
            </div>
          )
        })}
        {posts.length === 0 && (
          <p style={{ fontSize: 12, color: 'var(--text-faint)', textAlign: 'center' }}>
            No prayers yet. Be the first to share.
          </p>
        )}
      </div>

      <p style={{ fontSize: 10, color: 'var(--text-faint)', textAlign: 'center', marginTop: 16 }}>
        In crisis? <a href="/help" style={{ color: 'var(--accent)' }}>Get support now</a>
      </p>
    </div>
  )
}
