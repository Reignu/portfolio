import './App.css'
import Landing from './sections/Landing'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Landing 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <section id="skills" className="placeholder-section">
        <h1>Skills</h1>
        <p>Your journey starts here...</p>
      </section>
    </div>
  )
}

export default App