// const firstName = localStorage.getItem('firstName')
// const lastName = localStorage.getItem('lastName')
// const id = localStorage.getItem('id')
// gets userid from local storage passed down from login
// const id = localStorage.getItem('id')
//initializes logData array
// let logData = []

// const renderLog = _=> {
//   axios.get(`/api/log/user/${id}`)
//     .then((data) => {
//       console.log(data)
//       logData = data.data
//       console.log(logData)
//     })
// }
// renderLog()
document.addEventListener('click',({target})=>{
    const reg = /lc-btn-[0-9]*/
    if(reg.test(target.id)){
        const index = parseInt((target.id).replace('lc-btn-', ''))
        document.getElementById(`log-card-${index}`).style.opacity = 1
        setInterval(() => {
            if(document.getElementById(`log-card-${index}`).style.opacity <= 0){
                document.getElementById(`log-card-${index}`).style.display='none'
                clearInterval()
            } else{
                document.getElementById(`log-card-${index}`).style.opacity-=0.01
            }
        }, 2)

    }
})

