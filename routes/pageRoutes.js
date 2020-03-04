const router = require('express').Router()
const {User} = require('./../models')
router.get('/', (req, res) => {
    res.render('home')
})
router.get('/createAccount', (req, res) => {
    res.render('createAccount')
})
router.get('/dashboard/:uid', (req, res) => {
    User.findOne({ where: { id: req.params.uid } })
    .then(users => {
        res.render('dashboard', JSON.parse(JSON.stringify(users)))
    })
    .catch(e => console.error(e))
})

router.get('/profile/:uid', (req, res) => {
    res.render('profile', { uid: req.params.uid })
})
router.get('/createLog', (req, res) => {
    res.render('createLog')
})
router.get('/**', (req, res) => {
    res.redirect('/')
})
module.exports = router
