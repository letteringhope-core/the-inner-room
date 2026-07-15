import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import Home from './components/Home.jsx'
import PrayerWall from './components/PrayerWall.jsx'
import Notes from './components/Notes.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'
import BottomNav from './components/BottomNav.jsx'

export default function App() {
  const [user, setUser] = useState(undefined) // undefined = still checking

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => setUser(u))
  }, [])

  if (user === undefined) {
    return <div style={{ color: 'var(--text)', padding: 40 }}>Loading...</div>
  }

  if (!user) {
    return <Login />
  }

  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prayer" element={<PrayerWall />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <BottomNav />
    </div>
  )
}
