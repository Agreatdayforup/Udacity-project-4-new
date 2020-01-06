var aylien = require("aylien_textapi");
// initiates the aylien SDK have no clue how to get my ID&KEYS to send over
var textapi = new AYLIEN({
    application_id: process.env.Aylien_ID,
    application_key: process.env.Aylien_KEY
  })
  
  console.log('Your key is' )
  
  //aylien API call for JS
  function ApiCall(req, res) {
      textapi.classify({
      'url': req.body.URL
    }, function(error, res) {
      if (error === null) {
        res['categories'].forEach(function(c) {
          res.send(c)
          console.log(c);
        })
        return res
      }
    })
  }

  module.exports = ApiCall