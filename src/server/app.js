//enviroment variables
const dotenv = require('dotenv')
dotenv.config()

const path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
var Aylien = require('aylien_textapi')



// set server using express
const app = express()

// body-parser is used as middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//configure cors
app.use(cors())

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

//mock api
let mockAPIResponse = {
  'title': 'test json response',
  'message': 'this is a message',
  'time': 'now'
}
// mock array for testing
const functions = {
  createUser: () => {
    const user = {firstName: 'Patrick'}
    user['lastName'] = 'Cayer'
    return user
  }
}
//test to see if fetch is working
app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

//aylien API call for JS
app.post('/classify', function (req, res) {
  console.log("it worked")
  let InputURL = req.body.url
  textapi.sentiment({ url: InputURL }, function (error, response) {
    if (error === null) {
      testAnyzData['results'] = response.polarity
      testAnyzData['polarity_c'] = response.polarity_confidence
      testAnyzData['subjectivity'] = response.subjectivity
      testAnyzData['subjectivity_c'] = response.subjectivity_confidence

      
      res.send(response)
      //console.log(response)
    } else {
      console.log(error)
    }
  })
})


module.exports = functions

app.listen(8080, () => {
  console.log('the server is live')
})


