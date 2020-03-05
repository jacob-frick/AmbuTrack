const createUser = () => {
  axios.post('/api/user', {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    userName: document.getElementById('userName').value,
    email: document.getElementById('email').value,
    employer: document.getElementById('employer').value
  })
}

document.getElementById('btnCreateUser').addEventListener('click', event => {
  event.preventDefault().setTimeout(() => {
    createUser()
  }, 1000)
  window.location.href = "/login"
})

