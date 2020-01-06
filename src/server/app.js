const path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors')
const ApiCall = require('./server/apiCall.js/index.js')

//enviroment variables
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

var AYLIEN = require('aylien_textapi')

// set server using express
const app = express()

// body-parser is used as middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//configure cors
app.use(cors())
// app.options("Access-Control-Allow-Origin", "*", cors())


// const publicDirectoryPath = path.join(__dirname, 'src')
// app.use(express.static(publicDirectoryPath))

app.get('/', function(req, res) {
  res.sendFile('dist/index.html')
})



app.post('/classify', function (req, res){
   res.send(ApiCall)
})



app.listen(3000, () => {
  console.log('the server is live')
})

module.exports = app