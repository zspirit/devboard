import './Sidebar.css'

const navItems = [
  { label: 'Overview', icon: '~' },
  { label: 'Commits', icon: '#' },
  { label: 'Deployments', icon: '>' },
  { label: 'Settings', icon: '*' },
]

function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-text">DevBoard</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${active === item.label ? 'active' : ''}`}
            onClick={() => onNavigate(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
