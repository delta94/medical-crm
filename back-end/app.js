const express = require('express')
const path = require('path')
const cors = require('cors')

const authRouter = require('./routers/auth')
const patientRouter = require('./routers/patients')
const searchRouter = require('./routers/search')

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/login', authRouter)
app.use('/patients', patientRouter)
app.use('/search', searchRouter)

module.exports = app
