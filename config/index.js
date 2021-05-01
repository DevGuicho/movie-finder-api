require('dotenv').config()

const config = {
  dev: process.env.NODE_ENV === 'development',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbName: process.env.DB_NAME,
  dbPassword: process.env.DB_PASSWORD
}
module.exports = config
