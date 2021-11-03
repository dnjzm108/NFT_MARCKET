const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const sellController = require('./sell.controller')
const mintController = require('./mint.controller')
const itemController = require('./item.controller')


router.get('/',itemController.testGetNFT)
router.get('/designer',itemController.getDesigner)

router.post('/mint',upload.array('image'),mintController.mint_nft);

router.post('/sell',sellController.immediatelySell);

module.exports = router



module.exports = router