import validator from "validator"

//import { response } from "express"


const searchForm = document.querySelector('form')
// const userContent = document.querySelector('#results')
let userURL = document.getElementById('name').value

// Url validator taken from https://www.tutorialspoint.com/How-to-validate-URL-address-in-JavaScript
function validURL(userURL) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ //port
  '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i');
  return pattern.test(userURL);
}

searchForm.addEventListener('submit', (event) => { 
    event.preventDefault()

    const getURL = 'http://localhost:8080/classify'

    if (validURL(userURL)) {
       fetch(getURL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: SON.stringify({url: userURL})
        })
          .then(res => res.json())
          .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.label
          
        }) .catch((error) => {
            console.log('rejected', error)
        })

      }  else {
        document.getElementById('results').innerHTML = 'Please type a Url'
  }
})


      


export { searchForm }


