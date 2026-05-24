import { useEffect, useRef, useState } from 'react'
import styles from './Projects.module.css'
import { data } from '../data'

export default function Projects() {
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
    <section id="projects" className={styles.section}>
      <div className="max-w" ref={ref}>
        <div className={`fade-up ${visible ? 'visible' : ''}`}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </div>

        <div className={styles.grid}>
          {data.projects.map((project, i) => (
            <div
              key={project.title}
              className={`${styles.card} fade-up ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 + i * 0.15}s` }}
            >
              <div
                className={styles.iconWrap}
                style={{ background: `${project.color}18`, border: `0.5px solid ${project.color}33` }}
              >
                <span className={styles.icon}>{project.icon}</span>
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className={styles.tag}
                    style={{ color: project.color, background: `${project.color}12`, borderColor: `${project.color}28` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter} style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
