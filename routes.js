const express = require('express')
const router = express.Router()

const movies = require('./movies')

router.get('/', function (req, res) {
	res.json(movies)
})

module.exports = router
