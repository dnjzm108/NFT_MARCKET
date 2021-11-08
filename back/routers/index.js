const express = require('express')
const router = express.Router()
const user = require('./user')
const nft = require('./nft')
const product = require('./product')

router.use('/user',user)
router.use('/nft',nft)
router.use('/product',product)


module.exports = router