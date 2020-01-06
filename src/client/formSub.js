//import { response } from "express"


const searchForm = document.querySelector('form')
// const userContent = document.querySelector('#results')
const userURL = document.getElementById('name').value
console.log( `The url is: ${userURL}`)

// let URL = userURL

searchForm.addEventListener('submit', (e) => { 
    e.preventDefault()

    console.log("::: Form Submitted :::")

    const getClassify =  ( url = '', data = {}) => {
           fetch('url', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}
           }).then((response) => {
                console.log('resolved', getClassify)
                return response
              }).then((data) => {
                document.getElementById('results').innerHTML = (response.message)
              }).catch((error) => {
                console.log('error', error)
              })
            }
            getClassify('http://localhost:8080/classify', {'URL': userURL})
          
          
    })


  //   const getClassify = async (url='', data = {}) => {
  //     try {
  //       const Aylapi = await fetch(url, {
  //         method: 'POST',
  //         credentials: 'same-origin',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body:JSON.stringify(data)
  //       })
  //         .then(res => res.json())
  //         .then(function(res) {
  //           document.getElementById('results').innerHTML = (res.message)
  //         })
  //       } catch(error) {
          
  //       }
  //     }
  //     getClassify('http://localhost:8080/classify', {'URL': userURL})
  // })   

export { searchForm }
  
