import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom"

import styles from './patientProfile.module.css'
import Button from "../../button/button"

const PatientProfile = () => {
  const [patient, setPatient] = useState({})
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    fetch(`http://localhost:5000/patients/${id}`)
      .then(res => res.json())
      .then(json => setPatient(json))
  }, [id])

  const changeNameHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
        ...prev,
        name: e.target.value
      })
    )
  }
  const changeBdateHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      birthDay: e.target.value
    }))
  }
  const changeWorkHanddler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      place: e.target.value
    }))
  }
  const changeStatusHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      status: e.target.value
    }))
  }
  const changeMilitaryHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      militaryRank: e.target.value
    }))
  }
  const changeAddressHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      address: e.target.value
    }))
  }
  const changeMainDeseaseHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      mainDisease: e.target.value
    }))
  }
  const changeAccompanyingDiseaseHandler = (e) => {
    e.persist()
    setPatient((prev) => ({
      ...prev,
      accompanyingDisease: e.target.value
    }))
  }

  const addChangeHandler = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/patients/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patient)
    }).then(res => {
      if (res.status === 200) {
        history.push('/patients')
      } else {
        history.push('/error')
      }
    })
  }

  const deleteChangeHandler = (e) => {
    e.preventDefault()
    fetch(`http://localhost:5000/patients/delete/${id}`).then(res => {
      if (res.status === 200) {
        history.push('/patients')
      }
    })
  }

  return (
    <div>
      <div className='my-container'>
        <form action="">
          <div className={styles.input}>
            <div htmlFor="name">ФИО:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='name'
              autoFocus={true}
              value={patient.name}
              onChange={changeNameHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="bdate">Дата рождения:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='bdate'
              value={patient.birthDay}
              onChange={changeBdateHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="work">Место службы:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='work'
              value={patient.place}
              onChange={changeWorkHanddler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="status">Статус:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='status'
              value={patient.status}
              onChange={changeStatusHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="military">Специальное звание:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='military'
              value={patient.militaryRank}
              onChange={changeMilitaryHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="address">Домашний адрес:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='address'
              value={patient.address}
              onChange={changeAddressHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="mainDesease">Основное заболевание:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='mainDesease'
              value={patient.mainDisease}
              onChange={changeMainDeseaseHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="accompanyingDisease">Сопутствующие заболевания:</div>
            <input
              className={styles.patientInput}
              type="text"
              name='accompanyingDisease'
              value={patient.accompanyingDisease}
              onChange={changeAccompanyingDiseaseHandler}
            />
          </div>
          <div className={styles.input}>
            <div htmlFor="vacination">Вакцинации:</div>
            <span><Button title='Изменить сведения о вакцинации'/></span>
          </div>
          <div className={styles.btns}>
            <div className={styles.submit}>
              <span onClick={addChangeHandler}><Button title='Добавить изменения'/></span>
            </div>
            <div className={styles.delete}>
              <div onClick={deleteChangeHandler}><Button title='Удалить пациента из базы'/></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PatientProfile
