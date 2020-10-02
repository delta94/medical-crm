import React from 'react'
import { Link } from "react-router-dom"

import styles from './errorPage.module.css'

const ErrorPage = () => {
  return (
    <div className='my-container'>
      <div className={styles.error}>
        <h1>Вы ввели неверные данные попробуйте еще раз перейдя по ссылке ниже</h1>
        <Link to='/auth'>Авторизация</Link>
      </div>
    </div>
  )
}

export default ErrorPage
