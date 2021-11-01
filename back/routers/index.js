const express = require('express')
const router = express.Router()
const user = require('./user')
const mint = require('./mint')

router.use('/user',user)
router.use('/mint',mint)


module.exports = router