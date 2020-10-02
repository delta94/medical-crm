const router = require('express').Router()
const Patient = require('../models/patient')

router.route('/')
  .post(async (req, res) => {
    try {
      const patients = await Patient.find({})
      const patient = patients.filter((obj) => obj.name.toLowerCase().includes(req.body.name.toLowerCase()))
      res.json(patient)
    } catch (e) {
      throw new Error(e)
    }
  })

module.exports = router
