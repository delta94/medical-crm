import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

import styles from './newPatient.module.css'
import Button from "../../button/button"

const NewPatient = () => {
  const [name, setName] = useState('')
  const [bdate, setBdate] = useState('')
  const [work, setWork] = useState('')
  const [status, setStatus] = useState('')
  const [military, setMilitary] = useState('')
  const [address, setAddress] = useState('')
  const [mainDesease, setMainDesease] = useState('')
  const [accompanyingDisease, setAccompanyingDisease] = useState('')

  const history = useHistory()

  const addHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/patients/new-patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        bdate,
        work,
        status,
        military,
        address,
        mainDesease,
        accompanyingDisease
      })
    })
      .then(() => history.push('/patients'))
  }

  const changeNameHandler = (e) => {
    setName(e.target.value)
  }
  const changeBdateHandler = (e) => {
    setBdate(e.target.value)
  }
  const changeWorkHandler = (e) => {
    setWork(e.target.value)
  }
  const changeStatusHandler = (e) => {
    setStatus(e.target.value)
  }
  const changeMilitaryHandler = (e) => {
    setMilitary(e.target.value)
  }
  const changeAddressHandler = (e) => {
    setAddress(e.target.value)
  }
  const changeMainDeseaseHandler = (e) => {
    setMainDesease(e.target.value)
  }
  const changeAccompanyingDiseaseHandler = (e) => {
    setAccompanyingDisease(e.target.value)
  }

  return (
    <div className='my-container'>
      <form action="">
        <div className={styles.input}>
          <div>ФИО:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='name'
            autoFocus={true}
            value={name}
            onChange={changeNameHandler}
          />
        </div>
        <div className={styles.input}>
          <div htmlFor="bdate">Дата рождения:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='bdate'
            value={bdate}
            onChange={changeBdateHandler}
          />
        </div>
        <div className={styles.input}>
          <div htmlFor="work">Место службы:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='work'
            value={work}
            onChange={changeWorkHandler}
          />
        </div>
        <div className={styles.input}>
          <div htmlFor="status">Статус:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='status'
            value={status}
            onChange={changeStatusHandler}
          />
        </div>
        <div className={styles.input}>
          <div htmlFor="military">Специальное звание:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='military'
            value={military}
            onChange={changeMilitaryHandler}
          />
        </div>
        <div className={styles.input}>
          <div htmlFor="address">Домашний адрес:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='address'
            value={address}
            onChange={changeAddressHandler}
          />
        </div>
        <div className={styles.input}>
          <div htmlFor="mainDesease">Основное заболевание:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='mainDesease'
            value={mainDesease}
            onChange={changeMainDeseaseHandler}
          />
        </div>
        <div className={styles.input}>
          <div>Сопутствующие заболевания:</div>
          <input
            className={styles.patientInput}
            type="text"
            name='accompanyingDisease'
            value={accompanyingDisease}
            onChange={changeAccompanyingDiseaseHandler}
          />
        </div>
        <div className={styles.input}>
          <div>Вакцинации:</div>
          <span className={styles.last}><Button title='Добавить привики'/></span>
        </div>
        <span className={styles.submit}>
          <span onClick={addHandler}><Button title='Добавить нового пациента'/></span>
        </span>
      </form>
    </div>
  )
}

export default NewPatient
