const createUser = () => {
  axios.post('/api/user', {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    username: document.getElementById('username').value,
    email: document.getElementById('email').value,
    employer: document.getElementById('employer').value
  })
  .then(user =>  {
    let r = JSON.parse(JSON.stringify(user))
    localStorage.setItem('id', r.data.id)
    window.location.href = `/dashboard/${r.data.id}`
  })
}


document.getElementById('btnCreateUser').addEventListener('click', event => {
  event.preventDefault()
  createUser()
})


