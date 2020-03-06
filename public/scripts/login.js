
document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
    axios.get(`/api/user/username/${document.getElementById('userName').value}`)
      .then((data) => {
        
        localStorage.setItem('firstName', data.data.firstName)
        localStorage.setItem('lastName', data.data.lastName)
        localStorage.setItem('userName', data.data.username)
        localStorage.setItem('email', data.data.email)
        localStorage.setItem('id', data.data.id)
        window.location.href = '/dashboard'
      })
      .catch(error => {
        window.location.href = '/createAccount'
      })
  })



