import ThemeContext from '../../Context/Context'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Header() {

  const { theme, setTheme } = useContext(ThemeContext)

  useEffect(() => {
    console.log(theme);
  }, [theme])

  return (
    <div className={styles.header}>
      <div className={styles.head}>
        <h4>Yusuf Sezgin</h4>
      </div>
      <div className={styles.links}>
        <div className={styles.links}>
          <div className={styles.link} href=''>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
            <Link to="/" className="mt-1 ms-2">
              About
            </Link>
          </div>
          <div href='' className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-file-code-fill" viewBox="0 0 16 16">
              <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 1 1 .708-.708z" />
            </svg>
            <Link to="/skills" className="mt-1 ms-2">
              Skills
            </Link>
          </div>
          <div href='' className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
              <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1z" />
            </svg>
            <Link to="/projects" className="mt-1 ms-2">
              Projects
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
