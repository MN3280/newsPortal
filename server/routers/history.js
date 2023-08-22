const express = require('express')
const router = express.Router()
const Controller = require('../controllers/historyControllers')


router.get('/', Controller.readHistory)

module.exports = router