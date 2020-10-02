import React, { useState } from 'react'
import { useHistory} from 'react-router-dom'

import styles from './auth.module.css'
import Button from "../button/button";

const Auth = () => {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const history = useHistory()

  const authHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        password: userPassword
      })
    }).then(res => {
      if (res.status === 200) {
        history.push('/patients')
      }
      if (res.status === 401) {
        history.push('/error')
      }
    })
  }

  return (
    <div className='my-container'>
      <div className={styles.auth}>
        <h2>Авторизация</h2>
        <form>
          <div className={styles.input}>
            <label htmlFor='name'>Ваше имя</label>
            <input
              type='text'
              name='name'
              className={styles.authInput}
              autoFocus={true}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styles.input}>
            <label htmlFor='password'>Ваш пароль</label>
            <input
              type='password'
              name='password'
              className={styles.authInput}
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <div onClick={authHandler} >
            <Button title={'Войти'}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Auth
