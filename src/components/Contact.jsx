import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'
import { data } from '../data'

export default function Contact() {
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

  const contacts = [
    { label: 'Email', value: data.email, href: `mailto:${data.email}`, icon: '✉️' },
    { label: 'Phone', value: data.phone, href: `tel:${data.phone}`, icon: '📞' },
    { label: 'LinkedIn', value: 'bethi-harshavardhan', href: data.linkedin, icon: '💼', external: true },
    { label: 'GitHub', value: 'Harshavardhannani', href: data.github, icon: '🐙', external: true },
    { label: 'Location', value: data.location, href: null, icon: '📍' },
  ]

  return (
    <section id="contact" className={styles.section}>
      <div className={`max-w ${styles.inner}`} ref={ref}>
        <div className={`${styles.left} fade-up ${visible ? 'visible' : ''}`}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider" />
          <p className={styles.body}>
            Open to internships, full-time roles, and exciting projects.
            Whether you have a question or just want to say hi — my inbox is always open.
          </p>

          <a href={`mailto:${data.email}`} className={styles.bigCta}>
            Send me an Email ✉️
          </a>
        </div>

        <div className={`${styles.right} fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className={styles.card}>
            <p className={styles.cardTitle}>Contact Details</p>
            <div className={styles.contactList}>
              {contacts.map((c) => (
                <div key={c.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{c.icon}</span>
                  <div>
                    <p className={styles.contactLabel}>{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className={styles.contactValue}
                        target={c.external ? '_blank' : undefined}
                        rel={c.external ? 'noreferrer' : undefined}
                      >
                        {c.value} {c.external && '↗'}
                      </a>
                    ) : (
                      <p className={styles.contactValuePlain}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
