const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const sellController = require('./sell.controller')
const mintController = require('./mint.controller')
const itemController = require('./item.controller')
const swapController = require('./swap.controller')
const transferController = require('./transfer.controller')
// const { default: mint } = require('../../../front/client/pages/mint')



router.get('/',itemController.getNFTs)
router.get('/filter',itemController.getFilterData)

router.post('/mint',upload.array('image'),mintController.mint_nft);
router.get('/maincate',mintController.maincate);
router.get('/middlecate',mintController.middlecate);
router.post('/auctioninfo',mintController.auction_info);

router.post('/sell',sellController.immediatelySell);

router.post('/swap',swapController.KIP7token_swap);
router.post('/transfer',transferController.KIP7token);

module.exports = router
