const boom = require('@hapi/boom')

function validationHandler(error, req, res, next) {
  if (error.message.indexOf('duplicate key error') !== -1) {
    next(boom.badRequest('Id already exists'))
  }
  if (error.name === 'ValidationError') {
    next(boom.badRequest(error.message))
  }
  if (error.name === 'CastError') {
    next(boom.badRequest('Incorrect Id format'))
  }
}
module.exports = validationHandler
