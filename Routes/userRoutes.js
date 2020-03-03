const User = require('../models/User.js')
const router = require('express').Router()

// Create a user
router.post('/user', (req, res) => {
  User.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

//View all users
router.get('/user', (req, res) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(e => console.error(e))
})

// DELETE a user by ID
router.delete('/user/:id', (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

// View user by id
router.get('/user/:id', (req, res) => {
  User.findOne({ where: { id: req.params.id }})
    .then(users => res.json(users))
    .catch(e => console.error(e))
})



module.exports = router