import React from 'react'
import { Link } from "react-router-dom"

import styles from './header.module.css'

const Header = () => {
  return (
      <div className={styles.nav}>
        <Link to='/'><h1>Электронная поликлиника</h1></Link>
      </div>
  )
}

export default Header
