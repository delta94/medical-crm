const mongoose = require('mongoose')

const patienSchema = new mongoose.Schema({
  name: { type: String },
  birthDay: { type: String },
  place: String,
  status: String,
  militaryRank: String,
  address: String,
  mainDisease: String,
  accompanyingDisease: [String],
  vaccinations: { type: [Object], default: [] }
})

module.exports = mongoose.model('Patient', patienSchema)

