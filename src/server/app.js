//enviroment variables
const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
var bodyParser = require('body-parser')

const express = require('express')
var Aylien = require('aylien_textapi')



// set server using express
const app = express()

// body-parser is used as middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//configure cors


// main project folder
app.use(express.static('dist'))

// Initialize routes
app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})


let testAnyzData = {}

// initiates the aylien SDK 
var textapi = new Aylien({
  application_id: `${process.env.Aylien_ID}`,
  application_key: `${process.env.Aylien_KEY}`
});
//shows the api key is properly called
console.log(`Your key is ${process.env.Aylien_KEY}`)

//test to see if fech is working
app.get('/test', function (req, res) {
  let mockAPIResponse = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
  }
  res.send(mockAPIResponse)
})

//aylien API call for JS
app.post('/classify', function (req, res) {
  console.log("it worked")
  let InputURL = req.body.url
  textapi.sentiment({ url: InputURL }, function (error, response) {
    if (error === null) {
      testAnyzData['results'] = response.results
      

      res.send(response)
      console.log(testAnyzData)
    } else {
      console.log(error)
    }
  })
})


app.listen(8080, () => {
  console.log('the server is live')
})

