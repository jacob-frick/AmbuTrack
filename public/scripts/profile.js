
const id = localStorage.getItem('id')

axios.get(`/api/log/user/${id}`)
  .then((data) => {
    const totalLogs = data.dada.length
    document.getElementById('totalLogs').innerHTML = totalLogs
    console.log(totalLogs)
  })
    .catch(error => {
      console.error(error)
    })