const path = require('path')
var bodyParser = require('body-parser')
const cors = require('cors')


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


const publicDirectoryPath = path.join(__dirname, 'src')
app.use(express.static(publicDirectoryPath))





// initiates the aylien SDK have no fucking clue how to get my ID&KEYS to send over
var textapi = new AYLIEN({
  application_id: process.env.Aylien_ID,
  application_key: process.env.Aylien_KEY
})

console.log('Your key is' )

//aylien API call for JS
function AylAPI(req, res) {
    textapi.classify({
      'url': req.body.URL
    }, function(error, res) {
      if (error === null) {
        res.send(response)
        }
        console.log(response);
    })
    return res
}

app.post('/classify', function (req, res){
  AylAPI(req, res)
})


app.listen(3000, () => {
  console.log('the server is live')
})

