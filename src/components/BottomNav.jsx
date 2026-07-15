import { NavLink } from 'react-router-dom'

const navStyle = ({ isActive }) => ({
  color: isActive ? '#2ED8A7' : '#6A6A6A',
  textDecoration: 'none',
  fontSize: 11,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 4
})

export default function BottomNav() {
  return (
    <nav
      style={{
        position: 'sticky',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '12px 0',
        background: '#0B0B0B',
        borderTop: '0.5px solid #2A2A2A'
      }}
    >
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/prayer" style={navStyle}>Prayer wall</NavLink>
      <NavLink to="/notes" style={navStyle}>Notes</NavLink>
    </nav>
  )
}
