const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const mintController = require('./mint.controller')

router.post('/',upload.array('image'),mintController.mintNFT);

module.exports = router