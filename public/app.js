console.log('ping')
const page = window.location.href

const { axios, localStorage } = window

let uid = localStorage.getItem('uid')
let uname = localStorage.getItem('uname')

document.getElementById('signIn').addEventListener('click', event => {
  // TODO: get uid
  // if (username && email) {
  page = `/dashboard/${uid}`
  // }
})


// const createUser = () => {
//   axios.post('/api/user', {
//     firstName: document.getElementById('firstName').value,
//     lastName: document.getElementById('lastName').value,
//     usename: document.getElementById('usename').value,
//     email: document.getElementById('email').value,
//     employer: document.getElementById('employer').value
//   })
// }

// document.getElementById('btnCreateUser').addEventListener('click', event => {
//   event.preventDefault()
//   createUser()
// })




