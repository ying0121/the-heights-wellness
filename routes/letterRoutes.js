const express = require('express')
const router = express.Router()
const LetterController = require('../controllers/LetterController')

router.get('/', LetterController.render)

module.exports = router