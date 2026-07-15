import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../firebase.js'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('signin')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function submit() {
    setError('')
    try {
      if (mode === 'signin') {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="screen" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
      <p className="serif" style={{ fontSize: 24, marginBottom: 24, textAlign: 'center' }}>
        The Inner Room
      </p>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ background: '#0B0B0B', border: '0.5px solid var(--border)', borderRadius: 8, padding: 10, color: 'var(--text)' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ background: '#0B0B0B', border: '0.5px solid var(--border)', borderRadius: 8, padding: 10, color: 'var(--text)' }}
        />
        {error && <p style={{ color: '#E85D5D', fontSize: 12 }}>{error}</p>}
        <button className="btn-accent" onClick={submit}>
          {mode === 'signin' ? 'Sign in' : 'Create account'}
        </button>
        <button
          onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
          style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: 12, cursor: 'pointer' }}
        >
          {mode === 'signin' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
        </button>
      </div>
    </div>
  )
}
