const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const sellController = require('./sell.controller')
const mintController = require('./mint.controller')
const itemController = require('./item.controller')
const swapController = require('./swap.controller')
const transferController = require('./transfer.controller')


router.get('/',itemController.testGetNFT)
router.get('/designer',itemController.getDesigner)

router.post('/mint',upload.array('image'),mintController.mint_nft);
router.post('/option',mintController.mint_option)

router.post('/sell',sellController.immediatelySell);

router.post('/swap',swapController.KIP7token_swap);
router.post('/transfer',transferController.KIP7token);

module.exports = router



module.exports = router