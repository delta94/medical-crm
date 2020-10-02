const http = require('http')
const colors = require('colors')
const mongoose = require('mongoose')
const app = require('./app')

const port = process.env.PORT || 5000

const server = http.createServer(app)

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/Msch', {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    })
    server.listen(port, ()=>{
      console.log(colors.magenta(`Server started on PORT ${port}...`).underline)
    })
    process.on('uncaughtException', () => {
      server.close()
    })

  } catch (e) {
    console.log(colors.red('Error server start').underline)
  }
}

start()
