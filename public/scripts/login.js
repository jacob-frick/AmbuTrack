const page = window.location.href
document.getElementById('createAccount').addEventListener('click', event => {
  if (!(page = '/createAccount')) {
    page = "/createAccount"
  }
})
