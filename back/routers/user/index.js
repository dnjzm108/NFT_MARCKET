const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('./user.controller')
const listController = require('./list.controller')



router.post('/join',upload.single('image'),controller.join)
router.post('/login',controller.login)
router.post('/name_check',controller.name_check)
router.post('/admin',controller.admin)
router.post('/checkseller',controller.checkseller)
router.post('/chageseller',controller.chageseller)

router.post('/buy',listController.getMyBuy);
router.post('/auction',listController.getMyAuction);
router.post('/immysell',listController.getMyImmySell);
router.post('/auctionsell',listController.getMyAuctionSell);
module.exports = router