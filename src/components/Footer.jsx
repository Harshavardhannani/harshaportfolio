import styles from './Footer.module.css'
import { data } from '../data'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`max-w ${styles.inner}`}>
        <span className={styles.logo}>HV<span>.</span>Bethi</span>
        <p className={styles.copy}>
          © {new Date().getFullYear()} Harsha Vardhan Bethi · {data.location}
        </p>
        <div className={styles.socials}>
          <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${data.email}`}>Email</a>
        </div>
      </div>
    </footer>
  )
}
