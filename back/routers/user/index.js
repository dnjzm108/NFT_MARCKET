const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const controller = require('./user.controller')
const listController = require('./list.controller')
const {checking,checkHeader} = require('../../auth')


router.post('/join',upload.single('image'),controller.join)
router.post('/login',controller.login)
router.post('/name_check',controller.name_check)
router.post('/admin',controller.admin)
router.post('/checkseller',controller.checkseller)
router.post('/applyseller',controller.applyseller)

router.get('/buy',checkHeader,listController.getMyBuy);
router.get('/auction',checkHeader,listController.getMyAuction);
router.get('/immysell',checkHeader,listController.getMyImmySell);
router.get('/auctionsell',checkHeader,listController.getMyAuctionSell);
router.post('/ship',checking,listController.updateShipInfo);
router.put('/invoice',checking,listController.updateInvoiceInfo);
router.put('/delivery',checking,listController.completeDelivery);
module.exports = router