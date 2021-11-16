const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const sellController = require('./sell.controller')
const mintController = require('./mint.controller')
const swapController = require('./swap.controller')
const transferController = require('./transfer.controller')
const itemController = require('./item.controller')



router.post('/mint',upload.array('image'),mintController.mint_nft);
router.get('/maincate',mintController.maincate);

router.post('/sell',sellController.immediatelySell);

router.post('/swap',swapController.KIP7token_swap);
router.post('/transfer',transferController.KIP7token);


router.get('/test',itemController.getNFTs)
module.exports = router



module.exports = router