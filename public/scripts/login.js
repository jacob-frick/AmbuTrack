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

    axios.get(`/api/user/username/${userName}`)
      .then

    // .then(({ data: [{ firstName, username }] }) => {
    //   fName = firstName
    //   uName = username
    //   localStorage.setItem('fName', firstName)
    //   localStorage.setItem('uname', username)
    // })
  console.log(userName)
  console.log(email)
  
  // window.location.href = '/dashboard'
  
  })



