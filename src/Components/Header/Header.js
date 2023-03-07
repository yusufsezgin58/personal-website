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
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <Link to="/rate" className="mt-1 ms-2">
              Rate
            </Link>
          </div>

          <div href='' className={styles.link}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
              <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
            </svg>
            <Link to="/travel" className="mt-1 ms-2">
              Travel
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header
