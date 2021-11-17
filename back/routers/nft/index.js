const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const sellController = require('./sell.controller')
const mintController = require('./mint.controller')
const swapController = require('./swap.controller')
const transferController = require('./transfer.controller')
<<<<<<< HEAD
// const { default: mint } = require('../../../front/client/pages/mint')
=======
const itemController = require('./item.controller')
>>>>>>> 8b0685c114680ce942973ec9ddf918f5a2818371



router.post('/mint',upload.array('image'),mintController.mint_nft);

router.post('/auctioninfo',mintController.auction_info);
router.get('/category',mintController.getCategory);

router.post('/sell',sellController.immediatelySell);

router.post('/swap',swapController.KIP7token_swap);
router.post('/transfer',transferController.KIP7token);


router.get('/test',itemController.getNFTs)
module.exports = router
