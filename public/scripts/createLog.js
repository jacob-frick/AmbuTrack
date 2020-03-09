const id = localStorage.getItem('id')
const createLog = () => {
  axios.post('/api/log', {
    date: document.getElementById('date').value,
    holdWall: document.getElementById('holdWall').value,
    bls: document.getElementById('bls').value,
    als: document.getElementById('als').value,
    calls: 0,
    cancels: document.getElementById('cancels').value,
    location: document.getElementById('location').value,
    userId: id
  })
}

document.getElementById('createLog').addEventListener('click', event => {
  event.preventDefault()
  createLog()
  document.getElementById("logForm").reset();
  document.getElementById('logCreationMessage').innerHTML = `<p> Log Created </p>`
  // window.location.href = `/dashboard/${id}`
})

