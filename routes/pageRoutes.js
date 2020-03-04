const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('home')
})
router.get('/createAccount', (req, res) =>{
    res.render('createAccount')
})
router.get('/dashboard/:uid', (req,res)=>{
    res.render('dashboard', {uid: req.params.uid})
})
router.get('/profile/:uid', (req,res)=> {
    res.render('profile', {uid:req.params.uid})
})
router.get('/createLog', (req,res) =>{
    res.render('createLog')
})
router.get('/**', (req,res)=>{
    res.redirect('/')
})
module.exports = router
