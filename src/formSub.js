//import { response } from "express"


const searchForm = document.querySelector('form')
// const userContent = document.querySelector('#results')
const userURL = document.getElementById('name').value

// let URL = userURL

searchForm.addEventListener('submit', (e) => { 
    e.preventDefault()

    console.log("::: Form Submitted :::")

    const getClassify = async ( url = '', data = {}) => {
            const response = fetch( url , {
              method:"POST",
              credentials: 'same-origin',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            })
              .then(res => res.json())
              .then((data) => document.getElementById('results').innerHTML = res.message)
              .catch(error => console.log('error', error))
            }
       {
            getClassify('http://localhost:8080/classify', {'URL': userURL})
          }
          
    })

  
      


export { searchForm }
  
