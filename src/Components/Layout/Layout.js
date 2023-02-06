import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import ThemeContext from '../../Context/Context'
import Header from '../Header/Header'
import styles from './styles.module.css'

function Layout() {

  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div className={styles.layout}>
      <div >
        <Header />
      </div> 
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
