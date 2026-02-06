import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Commits from './pages/Commits'
import Deployments from './pages/Deployments'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Overview')

  const renderPage = () => {
    switch (activePage) {
      case 'Overview':
        return <Overview />
      case 'Commits':
        return <Commits />
      case 'Deployments':
        return <Deployments />
      default:
        return <p style={{ color: '#8b949e' }}>Coming soon...</p>
    }
  }

  return (
    <div className="app">
      <Sidebar active={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <header className="page-header">
          <h1>{activePage}</h1>
        </header>
        <div className="page-body">
          {renderPage()}
        </div>
      </main>
    </div>
  )
}

export default App
