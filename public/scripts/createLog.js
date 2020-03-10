const id = localStorage.getItem('id')
const createLog = () => {
  let d = document.getElementById('date').value
  let e = d.split('-')
  let s = `${e[1]}/${e[2]}/${0}`
  axios.post('/api/log', {
    date: s,
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

