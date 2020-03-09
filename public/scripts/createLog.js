const id = localStorage.getItem('id')
const createLog = () => {
  axios.post('/api/log', {
    date: document.getElementById('date').value,
    holdWall: document.getElementById('holdWall').value,
    bls: document.getElementById('bls').value,
    als: document.getElementById('als').value,
    calls: document.getElementById('calls').value,
    cancels: document.getElementById('cancels').value,
    location: document.getElementById('location').value,
    userId: id
  })
}

document.getElementById('createLog').addEventListener('click', event => {
  event.preventDefault()
  createLog()
  // window.location.href = `/dashboard/${id}`
})

