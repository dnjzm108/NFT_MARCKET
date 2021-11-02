const express = require('express')
const router = express.Router()
const user = require('./user')
const nft = require('./nft')

router.use('/user',user)
router.use('/nft',nft)


module.exports = router