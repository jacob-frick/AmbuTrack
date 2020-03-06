const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')
console.log(firstName)
console.log(lastName)

document.getElementById('name').innerHTML = (`${firstName} ${lastName}`)