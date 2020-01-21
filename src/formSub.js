import validator from "validator"

//import { response } from "express"


const searchForm = document.querySelector('form')
// const userContent = document.querySelector('#results')
let userURL = document.getElementById('name').value


// Url validator taken from https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
function validURL(userURL) { 
  var pattern = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if(pattern.test(userURL)){
      return true;
    } else {
      return false;
    }
  }
  console.log(validURL(userURL));

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
          body: JSON.stringify({url: userURL})
      })
          .then(res => res.json())
          .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.label
        }) 
        document.getElementById('generate').style.backgroundColor = "#4def8c"
        .catch((error) => {
          console.log('rejected', error)
          })
      }  else {
        document.getElementById('results').innerHTML = 'Please type a Url'
        document.getElementById('generate').style.backgroundColor = "#ff6347"
  }
})


      


export { searchForm }
export { validURL }


