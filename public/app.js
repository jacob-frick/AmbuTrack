console.log('ping')

const { axios, localStorage } = window

let uid = localStorage.getItem('uid')
let uname = localStorage.getItem('uname')



const createLog = () => {
  axios.post('api/logs', {
    date: document.getElementById('date').value,
    holdWall: document.getElementById('holdWall').value,
    bls: document.getElementById('bls').value,
    als: document.getElementById('als').value,
    calls: document.getElementById('calls').value,
    cancels: document.getElementById('cancels').value
  })
}
document.getElementById('createLog').addEventListener('click', event => {
  event.preventDefault()
  createLog()
})

