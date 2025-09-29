const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')

router.get('/', HomeController.render)
router.get('/gf', HomeController.getFile)
router.post('/changeLanguage', HomeController.changeLanguage)
router.post('/changeCaptchaImage', HomeController.changeCaptchaImage)
router.post('/submit', HomeController.submit)
router.post('/submitSignUpForFooter', HomeController.submitSignUpForFooter)

module.exports = router