import { useState } from 'react'
import townBackground from '../assets/town-placeholder.png'
import adamImage from '../assets/adam.png'

type LandingProps = {
  darkMode: boolean
  onToggleDarkMode: () => void
  onBegin: () => void
}

function Landing({ 
  darkMode, 
  onToggleDarkMode,
  onBegin, 
}: LandingProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section 
      className={`landing ${darkMode ? 'dark' : ''}`} 
      style={{ backgroundImage: `url(${townBackground})` }}
    >
      <nav className="navbar">
        <div className="navbar-logo">ADAM</div>

        <div className={`navbar-links ${menuOpen ? 'menu-open' : ''}`}>
          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <button
          className="theme-toggle"
          onClick={onToggleDarkMode}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <main className="landing-content">
        <img
          className='adam-character'
          src={adamImage}
          alt='Adam'
        />

        <div className="speech-bubble">
          <p>Hi, I'm Adam!</p>
          <p>Welcome to my portfolio.</p>
        </div>

        <button 
          className="begin-button"
          onClick={onBegin}
        >
          Begin
        </button>
      </main>
    </section>
  )
}

export default Landing