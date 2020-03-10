console.log('hello')
const id = localStorage.getItem('id')


axios.get(`/api/log/user/${id}`)
  .then((data) => {
    let totalLogs
    console.log(data)
    for (i = 0; i < data.data.length; i++){
    totalLogs = i 
    }
    document.getElementById('totalLogs').innerHTML = totalLogs
    console.log(totalLogs)
  })
    .catch(error => {
      console.error(error)
    })