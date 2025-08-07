/*
  the app.js contains all the middleware imports and connection to the router and database for the application
*/

const config = require('./utils/config') // importing the mongo url and port through the .env file
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')

const notesRouter = require('./controllers/notes')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

logger.info('connecting to', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.info('error connecting to MongoDB: ', error.message)
  })

// const allowedOrigins = [
//   'http://localhost:5173',
//   'https://reactcourse-7gli.onrender.com/'
// ]

app.use(cors()) // activates the cross-origin
app.use(express.static('dist')) // serves the production build static files
app.use(express.json()) // activates the json-parser
app.use(middleware.requestLogger) // activates the custom requestLogger

app.use('/api/notes', notesRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./controllers/testing')
  app.use('/api/testing', testingRouter)
}

app.use(middleware.unknownEndpoint) // activates the unknownEndpoint middleware
app.use(middleware.errorHandler) // activates the errorHandler middleware

module.exports = app