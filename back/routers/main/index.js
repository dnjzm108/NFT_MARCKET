const express = require('express')
const router = express.Router()
const mainController = require('./main.controller')




router.get('/',mainController.getMain);
router.get('/init',mainController.getMainInit);
router.put('/like',mainController.updateLike);




module.exports = router