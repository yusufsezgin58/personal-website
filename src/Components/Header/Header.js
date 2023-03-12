import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

function Header() {
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
            <Link to="/" className="ms-2">
              About
            </Link>
          </div>
          <div href='' className={`${styles.link} ms-4`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
            <Link to="/rate" className="ms-2">
              Rate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
