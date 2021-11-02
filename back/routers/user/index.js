const express = require('express')
const router = express.Router()
const controller = require('./user.controller')

router.get('/',controller.test)
router.post('/join',controller.join)

module.exports = router