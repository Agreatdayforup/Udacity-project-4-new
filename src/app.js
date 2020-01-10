const path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors')


//enviroment variables
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')

var Aylien = require('aylien_textapi')

// set server using express
const app = express()

// body-parser is used as middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//configure cors
app.use(cors())
 


const publicDirectoryPath = path.join(__dirname, 'src')
app.use(express.static(publicDirectoryPath))



let testAnyzData = {}

// initiates the aylien SDK 
var textapi = new Aylien({
  application_id: process.env.Aylien_ID,
  application_key: process.env.Aylien_KEY
})

console.log(`Your key is ${process.env.Aylien_KEY}`)

//aylien API call for JS

app.post('/classify', function (req, res){
  let InputURL = req.body.URL
  textapi.classify({
    'url': InputURL
  }, function(error, res) {
    if (error === null) {
      testAnyzData['label'] = response.label

      res.send(testAnyzData)
      console.log(testAnyzData)
      } else {
        console.log(error)
      }  
  }) 
})


app.listen(3000, () => {
  console.log('the server is live')
})

