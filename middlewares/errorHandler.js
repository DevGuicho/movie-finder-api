const boom = require('@hapi/boom')
const { dev } = require('../config')
const debug = require('debug')('app:server')

function withErrorStack(error, stack) {
  if (dev) {
    return { ...error, stack }
  }
  return error
}

function logErrors(err, req, res, next) {
  debug(err)
  next(err)
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation('Ha habido un error inesperado'))
  }
  next(err)
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload }
  } = err

  res.status(statusCode)
  res.json(withErrorStack(payload, err.stack))
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler
}
