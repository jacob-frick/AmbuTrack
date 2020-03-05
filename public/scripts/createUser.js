const createUser = () => {
  axios.post('/api/user', {
    firstName: document.getElementById('accountCreateFirstName').value,
    lastName: document.getElementById('accountCreateLastName').value,
    usename: document.getElementById('accountCreateUserName').value,
    email: document.getElementById('accountCreateEmail').value,
    employer: document.getElementById('accountCreateEmployer').value
  })
}

document.getElementById('createUser').addEventListener('click', event => {
  event.preventDefault()
  createUser()
})

