import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import './styles/normalize.css'
import './styles/style.css'

import Header from "./components/header/header"
import Auth from "./components/auth/auth"
import Patients from "./components/patients/patients"
import ErrorPage from "./components/errorPage/errorPage"
import NewPatient from "./components/patient/newPatient/newPatient"
import Start from "./components/start/start"
import PatientProfile from "./components/patient/patientProfile/patientProfile"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path='/patients/:id'>
          <PatientProfile />
        </Route>
        <Route path='/auth'>
          <Auth/>
        </Route>
        <Route path='/patients'>
          <Patients/>
        </Route>
        <Route path='/new-patient'>
          <NewPatient/>
        </Route>
        <Route path='/error'>
          <ErrorPage/>
        </Route>
        <Route path='/'>
          <Start/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
