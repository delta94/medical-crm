import React from 'react'
import { Link } from "react-router-dom"

import styles from './start.module.css'

const Start = () => {
  return (
    <div className='my-container'>
      <div className={styles.flex}>
        <Link className={styles.link} to={'#'}>Для пациента</Link>
        <Link className={styles.link} to={'/auth'}>Для врача</Link>
        <Link className={styles.link} to='/analytics'>Аналитика</Link>
      </div>
    </div>
  )
}

export default Start
