import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

import styles from './patients.module.css'

import Patient from "../patient/patient"
import Button from "../button/button"
import Pagination from "../paginator/paginator";

const Patients = () => {
  const [patients, setPatients] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [patientPerPage] = useState(15)


  useEffect(() => {
    fetch('http://localhost:5000/patients')
      .then(res => res.json())
      .then(res => setPatients(res))
  }, [setPatients])

  const searchValueHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const searchHandler = (e) => {
    e.preventDefault()
    fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: searchValue
      })
    }).then(res => res.json())
      .then(json => setPatients(json))
  }

  const indexOfLastPost = currentPage * patientPerPage
  const indexOfFirstPost = indexOfLastPost - patientPerPage
  const currentPosts = patients.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='my-container'>
      <div className={styles.mainFlex}>
        <form action="">
          <div className={styles.search}>
            <input
              type="text"
              name='search'
              placeholder='Введите имя пациента для поиска'
              className={styles.searchInput}
              value={searchValue}
              onChange={searchValueHandler}
            />
            <div onClick={searchHandler}><Button title='Найти пациента'/></div>
          </div>
        </form>
        <Link to={'/new-patient'}><Button title='Добавить нового пациента'/></Link>
      </div>
      <div className={styles.grid}>
        <div>ФИО</div>
        <div>Дата рождения</div>
        <div>Статус</div>
        <div>Место службы</div>
        <div>Заболевание</div>
        {currentPosts.map(p =>
          <Patient
            key={p._id}
            id={p._id}
            name={p.name}
            birthDay={p.birthDay}
            status={p.status}
            place={p.place}
            disease={p.mainDisease}
          />)}
      </div>
      <Pagination
        postsPerPage={patientPerPage}
        totalPosts={patients.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Patients
