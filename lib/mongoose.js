const debug = require('debug')('app:database')
const mongoose = require('mongoose')
const { dbUser, dbPassword, dbName } = require('../config')

const dbUri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.ih2pv.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose
  .connect(dbUri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => debug('Database connected'))
  .catch((err) => debug(err))
