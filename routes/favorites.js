const express = require('express')
const FavoritesServices = require('../services/favorites')

function apiFavorites(app) {
  const router = express.Router()
  const favoritesService = new FavoritesServices()

  app.use('/api/favorites', router)

  router.get('/', async (req, res, next) => {
    try {
      const favorites = await favoritesService.getFavorites()

      res.json({
        message: 'Favorites listed',
        data: favorites
      })
    } catch (error) {
      next(error)
    }
  })
  router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      const favorite = await favoritesService.getFavorite({ id })

      res.json({
        message: 'Favorite retrieved',
        data: favorite
      })
    } catch (error) {
      next(error)
    }
  })
  router.post('/', async (req, res, next) => {
    const favorite = req.body
    try {
      const createdFavorite = await favoritesService.createFavorite({
        favorite
      })

      res.json({
        message: 'Favorite created',
        data: createdFavorite
      })
    } catch (error) {
      next(error)
    }
  })
  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    try {
      const deletedFavorite = await favoritesService.deleteFavorite({ id })
      res.json({
        message: 'favorite deleted',
        data: deletedFavorite
      })
    } catch (error) {
      next(error)
    }
  })
}

module.exports = apiFavorites
