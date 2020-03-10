const router = require('express').Router()

router.use('/api', require('./logRoutes.js'))
router.use('/api', require('./userRoutes.js'))
router.use('/', require('./downloadRoutes.js'))
router.use('/', require('./pageRoutes.js'))
router.get('/**', (req, res) => {
    res.redirect('/')
})
module.exports = router
