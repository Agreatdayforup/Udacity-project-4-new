import validator from "validator"

function handleSubmit(event) {
  console.log("hello from inside handle submit")

  let userURL = document.getElementById("name").value;
  event.preventDefault()

  

  fetch("/classify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: userURL })
  })
    .then(res => res.json())
    .then(function(res) {
      console.log(res)
      document.getElementById('results').innerHTML = res
      
    })
}

export { handleSubmit }


      






