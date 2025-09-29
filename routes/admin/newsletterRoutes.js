const express = require('express')
const router = express.Router()
const NewsletterController = require('../../controllers/admin/NewsletterController')

router.get('/', NewsletterController.render)

module.exports = router