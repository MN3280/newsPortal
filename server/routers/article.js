const express = require('express')
const router = express.Router()
const Controller = require('../controllers/articleControllers')

const authorization = require('../middlewares/authorization')

router.get('/', Controller.readArticle)
router.post('/', Controller.createArticle)
router.get('/:id', Controller.getOneArticle)
router.delete('/:id', authorization, Controller.deleteArticle)
router.put('/:id', Controller.replaceArticle)
router.patch('/:id', authorization, Controller.modifiedArticle)

module.exports = router