import { useEffect, useState } from 'react'
import adamClosedImage from '../assets/adam.png'
import adamOpenImage from '../assets/adam-jacket-open.png'

type SkillsProps = {
  revealing: boolean
}

function Skills({ revealing }: SkillsProps) {
  const [revealed, setRevealed] = useState(false)
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null)

  useEffect(() => {
    if (!revealing) return

    const timer = window.setTimeout(() => {
      setRevealed(true)
    }, 1100)

    return () => window.clearTimeout(timer)
  }, [revealing])

  return (
    <section id="skills" className="skills-section">
      <div className="skills-intro">
        <p className="skills-eyebrow">YOUR JOURNEY CONTINUES</p>
        <h1>Skills</h1>
        <p>Every skill is another badge earned on the journey.</p>
      </div>

      <div className={`skills-scene ${revealing ? 'zooming' : ''} ${revealed ? 'revealed' : ''}`}>
        <div className="skills-character">
          <img
            className={`character-pose ${revealed ? 'pose-hidden' : ''}`}
            src={adamClosedImage}
            alt="Adam with his jacket closed"
          />

          <img
            className={`character-pose character-open ${revealed ? 'pose-visible' : ''}`}
            src={adamOpenImage}
            alt="Adam with his jacket open, revealing his technology badges"
          />
        </div>

        {revealed && (
          <div className="skills-badges">
            <button
              className="skill-badge python-badge"
              onClick={() => setSelectedBadge('Python')}
            >
              Python
            </button>

            <button
              className="skill-badge java-badge"
              onClick={() => setSelectedBadge('Java')}
            >
              Java
            </button>
          </div>
        )}
      </div>

      {selectedBadge && (
        <div className="badge-details" role="status">
          <button
            className="badge-close"
            onClick={() => setSelectedBadge(null)}
            aria-label="Close badge details"
          >
            ×
          </button>
          <h2>{selectedBadge}</h2>
          <p>
            {selectedBadge === 'Python'
              ? 'Used for data science, automation and AI projects.'
              : 'Used for object-oriented programming and backend development.'}
          </p>
        </div>
      )}
    </section>
  )
}

export default Skills