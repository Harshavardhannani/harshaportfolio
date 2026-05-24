import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('about')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = links.map((l) => document.getElementById(l.toLowerCase()))
      sections.forEach((s) => {
        if (!s) return
        const rect = s.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) setActive(s.id)
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => scrollTo('about')}>
        HV<span>.</span>Bethi
      </div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map((l) => (
          <button
            key={l}
            className={`${styles.link} ${active === l.toLowerCase() ? styles.activeLink : ''}`}
            onClick={() => scrollTo(l)}
          >
            {l}
          </button>
        ))}
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
        <span className={menuOpen ? styles.barOpen : ''} />
      </button>
    </nav>
  )
}
