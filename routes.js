const express = require('express')
const router = express.Router()

const movies = require('./movies')

router.get('/', function (req, res, next) {
	res.json(movies)
})

// Crear ruta nueva GET /movies

module.exports = router
