//import { response } from "express"


const searchForm = document.querySelector('form')
// const userContent = document.querySelector('#results')
const userURL = document.getElementById('name').value



searchForm.addEventListener('submit', (e) => { 
    event.preventDefault()

     const getClassify = async (url='', data = {}) => {
      try {
        const Aylapi = await fetch(url, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(data)
        })
          .then(res => res.json())
          .then(function(res) {
            document.getElementById('results').innerHTML = (res.message)
          })
        } catch(error) {
          
        }
      }
      getClassify('http://localhost:8081/classify', {'URL': userURL})
  })  

      


export { searchForm }


