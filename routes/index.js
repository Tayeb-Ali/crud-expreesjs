const router = require('express').Router()

//new api
router.use('/auth', require('./auth.route'));
router.use('/users', require('./users.route'));

module.exports = router