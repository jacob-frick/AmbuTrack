document.getElementById('download-btn').addEventListener('click', () => {
    const val = document.getElementById('download-btn').value
    axios.get(`/download/pdf/${val}`)
})