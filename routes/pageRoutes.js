const router = require('express').Router()
const { User, Log } = require('./../models')

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/createAccount', (req, res) => {
    res.render('createAccount')
})

router.get('/dashboard/:uid', (req, res) => {
    Log.findAll({ where: { userId: req.params.uid } })
        .then(logs =>{
            res.render('dashboard',{user: req.body, logs: JSON.parse(JSON.stringify(logs))})
        })
        .catch(e => console.error(e))

})

router.get('/profile/:uid', (req, res) => {
    res.render('profile', { uid: req.params.uid })
})

router.get('/createLog', (req, res) => {
    res.render('createLog')
})

router.get('/log/:lid', (req, res) => {
    Log.findOne({ where: { id: req.params.lid } })
    .then(log => {
        res.render('viewLog', JSON.parse(JSON.stringify(log)))
    })
    .catch(e => console.error(e))
})

router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

router.get('/**', (req, res) => {
    res.redirect('/')
})
module.exports = router
