require('./lib/mongoose')
const debug = require('debug')('app:server')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const apiFavorites = require('./routes/favorites')
const { port } = require('./config')
const notFoundHandler = require('./middlewares/notFoundHandler')
const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./middlewares/errorHandler')
const validationHandler = require('./middlewares/validationHandler')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))

apiFavorites(app)

app.use(notFoundHandler)

app.use(validationHandler)
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(port, () => debug('server on port 3000'))
