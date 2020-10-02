import React from 'react'
import { Link } from "react-router-dom"

// import styles from './patient.module.css'

const Patient = ({ id, name, birthDay, status, place, disease }) => {
  return (
    <>
      <div style={{ backgroundColor: '#2A9D8F' }}><Link to={`/patients/${id}`}>{name}</Link></div>
      <div style={{ backgroundColor: '#2A9D8F' }}>{birthDay}</div>
      <div style={{ backgroundColor: '#2A9D8F' }}>{status}</div>
      <div style={{ backgroundColor: '#2A9D8F' }}>{place}</div>
      <div style={{ backgroundColor: '#2A9D8F' }}>{disease ? disease : 'Заболевание отсутствует'}</div>
    </>
  )
}

export default Patient
