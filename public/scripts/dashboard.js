const firstName = localStorage.getItem('firstName')
const lastName = localStorage.getItem('lastName')
// gets userid from local storage passed down from login
const id = localStorage.getItem('id')
//initializes logData array
let logData = []
//pulls all of the log data from the userId passed down from login
axios.get(`/api/log/user/${id}`)
  .then((data) => {
    console.log(data)
    logData = data
    console.log(logData)
  })

