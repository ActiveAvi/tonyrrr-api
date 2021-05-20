const express = require('express')
const router = express.Router()
const mail = require('../controllers/mail')
const auth = require('../middleware/auth')

router.post('/mail', mail.send)

module.exports = router
