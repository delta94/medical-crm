const router = require('express').Router()
const User = require('../models/user')

router.route('/')
  .post(async (req, res) => {
    const { name, password } = req.body
    const user = await User.find({ name })
    if (user.length > 0) {
      if (user[0].name === name && user[0].password === password) {
        res.sendStatus(200)
      } else {
        res.sendStatus(401)
      }
    }
    if (user.length === 0) {
      res.sendStatus(401)
    }
  })

module.exports = router
