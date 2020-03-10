
document.addEventListener('click', ({ target }) => {
    const reg = /lc-btn-[0-9]*/
    if (reg.test(target.id)) {
        const index = parseInt((target.id).replace('lc-btn-', ''))
        axios.delete(`/api/log/${index}`)
        .then((res)=> {
            console.log(res)
            document.getElementById(`log-card-${index}`).style.cursor = 'wait'
            document.getElementById(`log-card-${index}`).style.opacity = 1
            setInterval(() => {
                if(document.getElementById(`log-card-${index}`).style.opacity <= 0){
                    document.getElementById(`log-card-${index}`).style.display='none'
                    clearInterval()
                } else{
                    document.getElementById(`log-card-${index}`).style.opacity-=0.01
                }
            }, 2)
        })
    }
})

