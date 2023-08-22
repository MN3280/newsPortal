const express = require('express')
const router = express.Router()
const Controller = require('../controllers/userController')



router.get('/', Controller.readUser)
router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post("/auth/google-sign-in", Controller.googleLogin)

module.exports = router