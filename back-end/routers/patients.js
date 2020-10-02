const router = require('express').Router()
const Patient = require('../models/patient')

router.route('/')
  .get(async (req, res) => {
    try {
      const patients = await Patient.find()
      res.send(patients).end()
    } catch (e) {
      throw new Error(e)
    }
  })

router.route('/new-patient')
  .post(async (req, res) => {
    try {
      const {
        name,
        bdate,
        work,
        status,
        military,
        address,
        mainDesease,
        accompanyingDisease
      } = req.body
      const newPatient = new Patient({
        name: name,
        birthDay: bdate,
        place: work,
        status: status,
        militaryRank: military,
        address: address,
        mainDisease: mainDesease,
        accompanyingDisease: accompanyingDisease.split(','),
        vaccinations: []
      })
      await newPatient.save()
      res.sendStatus(200)
    } catch (e) {
      throw new Error(e)
    }
  })

router.route('/:id')
  .get(async (req, res) => {
    try {
      const patient = await Patient.findOne({ _id: req.params.id })
      res.json(patient)
    } catch (e) {
      throw new Error(e)
    }
  })
  .post(async (req, res) => {
    try {
      await Patient.findOneAndReplace({ _id: req.body._id }, req.body)
      res.sendStatus(200)
    } catch (e) {
      throw new Error(e)
    }
  })

router.route('/delete/:id')
  .get(async (req, res) => {
    try {
      await Patient.findOneAndDelete({ _id: req.params.id })
      res.sendStatus(200)
    } catch (e) {
      throw new Error(e)
    }
  })


module.exports = router
