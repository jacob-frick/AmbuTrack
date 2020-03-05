const createUser = () => {
  axios.post('/api/user', {
<<<<<<< HEAD
    firstName: document.getElementById('accountCreateFirstName').value,
    lastName: document.getElementById('accountCreateLastName').value,
    username: document.getElementById('accountCreateUserName').value,
    email: document.getElementById('accountCreateEmail').value,
    employer: document.getElementById('accountCreateEmployer').value
=======
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    userName: document.getElementById('userName').value,
    email: document.getElementById('email').value,
    employer: document.getElementById('employer').value
>>>>>>> a91310ed795380728aa926de5c06973e496b06ac
  })

}

<<<<<<< HEAD
document.getElementById('createUser').addEventListener('click', event => {
  event.preventDefault()
  createUser()

=======
document.getElementById('btnCreateUser').addEventListener('click', event => {
  event.preventDefault().setTimeout(() => {
    createUser()
  }, 1000)
  window.location.href = "/login"
>>>>>>> a91310ed795380728aa926de5c06973e496b06ac
})


