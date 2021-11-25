const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const mysql = require('mysql')
const axios = require('axios')
const http = require('http')
const server = http.createServer(app)
// const io = socket(server)
const cors = require('cors');


require('dotenv').config();

const PORT = process.env.PORT ||'4000'
// const {sequelize, Auction} = require('./models')
const router = require('./routers')
const socket = require('./socket.js');


app.use(cors({
    "Access-Control-Allow-Headers":"Authorization",
    "Access-Control-Allow-Origin": "http://localhost"
  }));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})


app.use('/',router)

socket.wsInit();

server.listen(PORT,()=>{
    console.log(`server start port ${PORT}`)
})
