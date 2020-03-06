// const page = window.location.href
// document.getElementById('createAccount').addEventListener('click', event => {
//   event.preventDefault()
//   if (!(page = '/createAccount')) {
//     page = "/createAccount"
//   }
// })


document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
  let userName = document.getElementById('userName').value
  let email = document.getElementById('email').value
  console.log(userName)
  console.log(email)
  
})

console.log('ping')
