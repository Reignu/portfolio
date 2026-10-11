import './App.css'
import Landing from './sections/Landing'
import Skills from './sections/Skills'
import { useEffect, useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  const [skillsRevealing, setSkillsRevealing] = useState(false)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Landing 
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        onBegin={() => {
          setSkillsRevealing(true)

          document.getElementById('skills')?.scrollIntoView({
            behavior: 'smooth',
          })
        }}
      />

      <Skills
        revealing={skillsRevealing}
      />
    </div>
  )
}

export default App