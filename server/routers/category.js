const express = require('express')
const router = express.Router()
const Controller = require('../controllers/categoryContoller')

router.get('/', Controller.readCategory)
router.post('/', Controller.createCategory)
router.delete('/:id', Controller.deleteCategories)

module.exports = router