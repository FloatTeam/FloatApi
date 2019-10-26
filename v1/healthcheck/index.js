const router = require('express').Router()
const controller = require('./controller.js')

module.exports = router

router.get('/', controller.healthCheck)
