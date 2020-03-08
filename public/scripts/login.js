
document.getElementById('signIn').addEventListener('click', event => {
  event.preventDefault()
    axios.get(`/api/user/username/${document.getElementById('userName').value}`)
      .then((data) => {
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
          console.log('email is does not match')
          
        } 
        })
        .catch(error => {
          window.location.href = '/createAccount'
        })
        
      })
      .catch(error => {
        window.location.href = '/createAccount'
      })
  })



