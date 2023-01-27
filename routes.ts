import { Router } from 'express'
import movies from './movies'

const router = Router()

router.get('/', function (req, res) {
	res.json(movies)
})

export default router
