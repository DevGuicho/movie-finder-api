const { Schema, model } = require('mongoose')

const favoriteSchema = new Schema({
  bgImage: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  favId: {
    required: true,
    type: Number,
    unique: true
  }
})

const Favorite = model('Favorite', favoriteSchema)

module.exports = Favorite
