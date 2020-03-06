const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')
const id = localStorage.getItem('id')


document.getElementById('name').innerHTML = (`${firstName} ${lastName}`)