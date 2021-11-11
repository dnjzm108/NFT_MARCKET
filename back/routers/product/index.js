const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/auction_info',controller.auction_info)
router.post('/check_like',controller.check_like)
router.post('/delete_like',controller.delete_like)
router.post('/create_like',controller.create_like)
router.post('/product_detail',controller.product_detail)

module.exports=router