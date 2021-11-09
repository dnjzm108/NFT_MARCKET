const express = require('express')
const router = express.Router()

const controller = require('./controller')

router.post('/product_detail',controller.product_detail)

module.exports=router