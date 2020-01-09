//import { response } from "express"


const searchForm = document.querySelector('form')
// const userContent = document.querySelector('#results')
const userURL = document.getElementById('name').value



searchForm.addEventListener('submit', (event) => { 
    event.preventDefault()

    const getURL = 'http://localhost:8080/classify'

       fetch(getURL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({url: userURL})
        })
          .then(res => res.json())
          .then(function(res) {
            console.log(res)
            document.getElementById('results').innerHTML = res.label
          
        }) .catch((error) => {
            console.log('rejected', error)
        })
      })


      


export { searchForm }


