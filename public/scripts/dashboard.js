const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')


document.getElementById('name').innerHTML = (`${firstName} ${lastName}`)