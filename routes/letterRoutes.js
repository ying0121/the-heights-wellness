const express = require('express')
const router = express.Router()
const LetterController = require('../controllers/LetterController')

router.get('/', LetterController.render)
router.post('/getCost', LetterController.getCost)

module.exports = router