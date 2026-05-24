import { useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'
import { data } from '../data'

export default function Experience() {
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
    <section id="experience" className={styles.section}>
      <div className="max-w" ref={ref}>
        <div className={`fade-up ${visible ? 'visible' : ''}`}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.timeline}>
          {data.experience.map((exp, i) => (
            <div
              key={exp.company}
              className={`${styles.item} fade-up ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div className={styles.marker}>
                <div className={styles.dot} style={{ background: exp.color, boxShadow: `0 0 0 4px ${exp.color}22` }} />
                {i < data.experience.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.content}>
                <div className={styles.header}>
                  <div>
                    <p className={styles.period}>{exp.period}</p>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>
                      <span className={styles.companyDot} style={{ background: exp.color }} />
                      {exp.company}
                    </p>
                  </div>
                  <span className={styles.typeTag}>Internship</span>
                </div>

                <ul className={styles.points}>
                  {exp.points.map((pt, j) => (
                    <li key={j} className={styles.point}>
                      <span className={styles.arrow} style={{ color: exp.color }}>▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
