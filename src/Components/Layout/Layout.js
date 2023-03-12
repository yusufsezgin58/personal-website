import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './styles.module.css'
import Modal from '../Modal/Modal'

function Layout() {

  return (
    <div className={styles.layout}>
      <div >
        <Modal />
        <Header />
      </div> 
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
