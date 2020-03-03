const router = require('express').Router()
const { Log } = require('./../models')

router.get('/log', (req, res) => {
    Log.findAll()
        .then(logs => res.json(logs))
        .catch(e => console.error(e))
})

router.post('/log', (req, res) => {
    Log.create(req.body)
        .then(res.sendStatus(200))
        .catch(e => console.log(e))
})


module.exports = router