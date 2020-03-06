const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')
const id = localStorage.getItem('id')
let logData = []

axios.get(`/api/log/user/${id}`)
  .then((data) => {
    console.log(data)
    logData = data
    console.log(logData)
  })

