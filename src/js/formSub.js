const Api_results = document.getElementById('results')
const Api_results2 = document.getElementById('polarity_c')
const Api_results3 = document.getElementById('subjectivity')
const Api_results4 = document.getElementById('subjectivity_c')

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
      Api_results.innerHTML = res.polarity
      Api_results2.innerHTML = res.polarity_confidence
      Api_results3.innerHTML = res.subjectivity
      Api_results4.innerHTML = res.subjectivity_confidence
      
      
    })
}




const functions = {
  add: (num1, num2) => num1 + num2
}

export { functions }
export { handleSubmit }
      






