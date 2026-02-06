import { useState } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('Overview')

  return (
    <div className="app">
      <Sidebar active={activePage} onNavigate={setActivePage} />
      <main className="main-content">
        <header className="page-header">
          <h1>{activePage}</h1>
        </header>
        <div className="page-body">
          <p>Content goes here</p>
        </div>
      </main>
    </div>
  )
}

export default App
