import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import { data } from '../data'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      containerRef.current?.classList.add(styles.loaded)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className={styles.hero} ref={containerRef}>
      <div className="grid-bg" />
      <div className={`${styles.glow} ${styles.glow1}`} />
      <div className={`${styles.glow} ${styles.glow2}`} />

      <div className={`max-w ${styles.inner}`}>
        <div className={styles.left}>
          {data.available && (
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Available for Opportunities
            </div>
          )}

          <h1 className={styles.name}>
            <span className={styles.nameLine1}>Harsha Vardhan</span>
            <span className={styles.nameLine2}>Bethi</span>
          </h1>

          <p className={styles.roles}>
            <span className={styles.role}>{data.title}</span>
            <span className={styles.separator}>/</span>
            <span className={styles.role}>{data.subtitle}</span>
          </p>

          <p className={styles.tagline}>{data.tagline}</p>

          <div className={styles.cta}>
            <a href={`mailto:${data.email}`} className={styles.btnPrimary}>
              Get in Touch ✉️
            </a>
            <button className={styles.btnGhost} onClick={() => scrollTo('projects')}>
              View Projects →
            </button>
            <a
              href={data.github}
              target="_blank"
              rel="noreferrer"
              className={styles.btnGhost}
            >
              GitHub ↗
            </a>
          </div>

          <div className={styles.meta}>
            <span>📍 {data.location}</span>
            <span>📞 {data.phone}</span>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.avatarOuter}>
            <div className={styles.orbitRing}>
              <div className={`${styles.orbitDot} ${styles.dot1}`} />
              <div className={`${styles.orbitDot} ${styles.dot2}`} />
              <div className={`${styles.orbitDot} ${styles.dot3}`} />
            </div>
            <div className={styles.avatarCard}>
              <div className={styles.initials}>HV</div>
              <p className={styles.avatarName}>Harsha Vardhan</p>
              <p className={styles.avatarTitle}>Full Stack Developer</p>
              <div className={styles.avatarBadges}>
                <span>Java</span>
                <span>React</span>
                <span>Spring Boot</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} onClick={() => scrollTo('skills')}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
