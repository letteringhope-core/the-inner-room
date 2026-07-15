import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/prayer', label: 'Prayer wall', icon: '🙏' },
  { to: '/notes', label: 'Notes', icon: '📝' }
]

export default function BottomNav() {
  return (
    <nav
      style={{
        position: 'sticky',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 12px calc(10px + env(safe-area-inset-bottom))',
        background: '#0B0B0B',
        borderTop: '0.5px solid #2A2A2A'
      }}
    >
      {tabs.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            flex: 1,
            padding: '6px 4px',
            borderRadius: 14,
            textDecoration: 'none',
            fontSize: 11,
            fontWeight: isActive ? 600 : 400,
            color: isActive ? 'var(--accent-dark)' : 'var(--text-faint)',
            background: isActive ? 'var(--accent)' : 'transparent',
            transition: 'background 0.15s ease, color 0.15s ease'
          })}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>{icon}</span>
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
