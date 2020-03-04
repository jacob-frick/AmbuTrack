const router = require('express').Router()

router.use('/api', require('./logRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/', require('./pageRoutes.js'))
module.exports = router
