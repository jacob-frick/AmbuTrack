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

router.get('/log/:id', (req, res) => {
    Log.findOne({ where: { id: req.params.id } })
        .then(log => res.json(log))
        .catch(e => console.error(e))
})
     
// DELETE a user by ID
router.delete('/log/:id', (req, res) => {
    Log.destroy({ where: { id: req.params.id } })
      .then(() => res.sendStatus(200))
      .catch(e => console.error(e))
  })
module.exports = router