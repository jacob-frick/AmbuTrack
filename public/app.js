console.log('ping')

const { axios, localStorage } = window

let uid = localStorage.getItem('uid')
let uname = localStorage.getItem('uname')



const createLog = () => {
  axios.post('api/log', {
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

const createUser = () => {
  axios.post('/api/user', {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    usename: document.getElementById('usename').value,
    email: document.getElementById('email').value,
    employer: document.getElementById('employer').value
  })
}

document.getElementById('createUser').addEventListener('click', event => {
  event.preventDefault()
  createUser()
})


// const signIn = (username) => {
//   axios.get(`api/username/${username || document.getElementById('username').value}`)
//   .then(()=>)


// }


