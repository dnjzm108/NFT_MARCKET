const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const http = require('http')
const server = http.createServer(app)
const cors = require('cors');


require('dotenv').config();

const PORT = process.env.PORT ||'4000'
// const {sequelize, Auction} = require('./models')
const router = require('./routers')


app.use(cors({
    "Access-Control-Allow-Headers":"Authorization",
    "Access-Control-Allow-Origin": "http://localhost:3000"
  }));
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.set('view engine', 'html')
nunjucks.configure('views', {
    express:app,
})


app.use('/',router)


server.listen(PORT,()=>{
    console.log(`server start port ${PORT}`)
})
