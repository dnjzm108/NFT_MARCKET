const express = require('express')
const router = express.Router()
const user = require('./user')
const nft = require('./nft')
const product = require('./product')
const main = require('./main')


router.use('/user',user)
router.use('/main',main)
router.use('/nft',nft)
router.use('/product',product)



module.exports = router