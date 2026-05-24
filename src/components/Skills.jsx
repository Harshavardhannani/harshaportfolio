import { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import { data } from '../data'

function SkillCard({ skill, animate }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.icon}>{skill.icon}</span>
        <span className={styles.name}>{skill.name}</span>
        <span className={styles.level}>{skill.level}%</span>
      </div>
      <div className={styles.barTrack}>
        <div
          className={styles.barFill}
          style={{
            width: animate ? `${skill.level}%` : '0%',
            background: skill.color,
            boxShadow: animate ? `0 0 12px ${skill.color}55` : 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className={styles.section}>
      <div className={`max-w fade-up ${animate ? 'visible' : ''}`} ref={ref}>
        <p className="section-label">Technical Stack</p>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <div className="section-divider" />

        <div className={styles.grid}>
          {data.skills.map((skill, i) => (
            <div
              key={skill.name}
              style={{ transitionDelay: `${i * 0.06}s` }}
              className={`fade-up ${animate ? 'visible' : ''}`}
            >
              <SkillCard skill={skill} animate={animate} />
            </div>
          ))}
        </div>

        <div className={styles.soft}>
          <p className={styles.softTitle}>Soft Skills</p>
          <div className={styles.softList}>
            {data.softSkills.map((s) => (
              <span key={s} className={styles.softBadge}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
