localStorage.setItem('firstName', '')
localStorage.setItem('lastName', '')
localStorage.setItem('userName', '')
localStorage.setItem('email', '')
localStorage.setItem('id', '')
document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
    axios.get(`/api/user/username/${document.getElementById('userName').value}`)
      .then((data) => {
        console.log(data)
        axios.get(`/api/user/email/${document.getElementById('email').value}`)
        .then((emailData) => {
          console.log(emailData)
          console.log(data.data.email)
          if (emailData.data.email === data.data.email){
        localStorage.setItem('firstName', data.data.firstName)
        localStorage.setItem('lastName', data.data.lastName)
        localStorage.setItem('userName', data.data.username)
        localStorage.setItem('email', data.data.email)
        localStorage.setItem('id', data.data.id)
        console.log('its a match')
        window.location.href = `/dashboard/${data.data.id}`
        } else if(emailData.data.email != data.data.email){
          console.log('it does not match')
            document.getElementById('logErrorMessage').innerHTML = `<p>Username or email are incorrect, try again.</p?`
        } 
        })
        .catch(error => {
          document.getElementById('logErrorMessage').innerHTML = `<p>Username or email are incorrect, try again.</p>`
        })
      })
      .catch(error => {
        console.error(error)
      })
  })



