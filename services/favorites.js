const Favorite = require('../models/Favorite')

class FavoritesServices {
  async getFavorites() {
    const favorites = await Favorite.find({})
    return favorites || []
  }

  async getFavorite({ id }) {
    const favorite = await Favorite.findById(id)
    return favorite || {}
  }

  async createFavorite({ favorite }) {
    const newfavorite = new Favorite(favorite)
    const createdFavorite = await newfavorite.save()
    return createdFavorite || {}
  }

  async deleteFavorite({ id }) {
    const deletedFavorite = await Favorite.findByIdAndDelete(id)
    return deletedFavorite || {}
  }
}

module.exports = FavoritesServices
