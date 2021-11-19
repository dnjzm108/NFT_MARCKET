const express = require('express')
const router = express.Router()
const mainController = require('./main.controller')
const {checking} = require('../../auth')



router.get('/',mainController.getMain);
router.get('/init',mainController.getMainInit);
router.put('/like',checking,mainController.updateLike);




module.exports = router