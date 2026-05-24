import { useEffect, useRef, useState } from 'react'
import styles from './Education.module.css'
import { data } from '../data'

export default function Education() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="education" className={styles.section}>
      <div className="max-w" ref={ref}>
        <div className={`fade-up ${visible ? 'visible' : ''}`}>
          <p className="section-label">Academic Background</p>
          <h2 className="section-title">Education</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {data.education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`${styles.card} fade-up ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className={styles.iconRow}>
                <span className={styles.icon}>{edu.icon}</span>
                <span className={styles.year}>{edu.year}</span>
              </div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              <p className={styles.location}>📍 {edu.location}</p>
              <span className={styles.score}>{edu.score}</span>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`${styles.certsBlock} fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <h3 className={styles.certsHeading}>Certifications</h3>
          <div className={styles.certsGrid}>
            {data.certifications.map((cert) => (
              <div key={cert.name} className={styles.certCard}>
                <div className={styles.certBadge} style={{ background: `${cert.color}15`, border: `0.5px solid ${cert.color}30` }}>
                  <span>{cert.icon}</span>
                </div>
                <span className={styles.certName}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
