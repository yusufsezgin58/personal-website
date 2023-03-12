import React from 'react'
import styles from './styles.module.css'

function Travel() {
  return (
    <div className={styles.travel}>
      <div className=''>
        <h4 id={styles.h4}>Countries That I Travelled</h4>
      </div>
      <div className={styles.photos}>
        <div className='shadow-lg' id={styles.image1}></div>
        <div className='ms-5 shadow-lg' id={styles.image2}></div>
        <div className='mt-4 shadow-lg' id={styles.image3}></div>
        <div className='ms-5 mt-4 mb-4 shadow-lg' id={styles.image4}></div>
      </div>
    </div>
  )
}

export default Travel
