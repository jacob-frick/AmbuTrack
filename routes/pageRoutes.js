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
            let l = JSON.parse(JSON.stringify(logs))
            l.sort((left, right) => {
                let ld = left.date.split('/')
                let rd = right.date.split('/')
                if(parseInt(ld[2]) === parseInt(rd[2])) {
                    if(parseInt(ld[0]) === parseInt(rd[0])){
                        return parseInt(rd[1]) - parseInt(ld[1])
                    }
                    return parseInt(rd[0]) - parseInt(ld[0])
                } 
                return parseInt(rd[2]) - parseInt(ld[2])
                
            })
            User.findOne({where: {id: req.params.uid}})
            .then(user=> {
                res.render('dashboard',{log: l, userData:  JSON.parse(JSON.stringify(user))})
            })
        })
        .catch(e => console.error(e))
})

router.get('/profile/:uid', (req, res) => {
    res.render('profile', { uid: req.params.uid })
})

router.get('/createLog/:uid', (req, res) => {
    User.findOne({where: {id: req.params.uid}})
    .then(user=> {
        res.render('createLog',{userData:  JSON.parse(JSON.stringify(user))})
    })
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

module.exports = router
