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

router.get('/buy',listController.getMyBuy);
router.get('/auction',listController.getMyAuction);
router.get('/immysell',listController.getMyImmySell);
router.get('/auctionsell',listController.getMyAuctionSell);
router.post('/ship',listController.updateShipInfo);
router.put('/invoice',listController.updateInvoiceInfo);
router.put('/delivery',listController.completeDelivery);
module.exports = router