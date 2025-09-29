const express = require('express')
const router = express.Router()
const ServiceController = require('../controllers/ServiceController')

router.get('/', ServiceController.render)
router.post('/getCost', ServiceController.getCost)
router.post('/submitForService', ServiceController.submitForService)

module.exports = router