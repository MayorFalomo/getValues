const fName = document.getElementById('fname')
const lName = document.getElementById('lname')
const Answer = document.getElementById('answer')
const lastName = document.getElementById('lastname')
const submitBtn = document.getElementById('submitBtn')

 submitBtn.addEventListener("click", (e) => {
     e.preventDefault()
    document.getElementById('answer').innerHTML = fName.value
    })
 submitBtn.addEventListener("click", (e) => { 
     e.preventDefault()
    document.getElementById('lastname').innerHTML = lName.value
    })
