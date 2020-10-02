import React from 'react'

import styles from './button.module.css'

const Button = ({title}) => {
  return (
    <span className={styles.btn}>
      <button>{title}</button>
    </span>
  )
}

export default Button
