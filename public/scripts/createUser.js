const createUser = () => {
  axios.post('/api/user', {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    usename: document.getElementById('usename').value,
    email: document.getElementById('email').value,
    employer: document.getElementById('employer').value
  })
}

document.getElementById('createUser').addEventListener('click', event => {
  event.preventDefault()
  createUser()
})

