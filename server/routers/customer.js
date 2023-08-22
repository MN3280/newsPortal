const express = require('express')
const CustomerController = require('../controllers/customerController')
const { custAuthentication } = require('../middlewares/authentication')
const router = express.Router()


router.post("/pub/register", CustomerController.custRegister)
router.post("/pub/login", CustomerController.custLogin)
router.post("/pub/googleLogin", CustomerController.custGoogleLogin)

router.get("/pub/articles/:id", CustomerController.custArticleById)


router.get("/pub/renderpagination", CustomerController.renderPagination)

router.get("/pub/categories", CustomerController.custCategories)



router.get("/pub/favArticle", custAuthentication, CustomerController.custFavArticle)
router.post("/pub/addFav/:id", custAuthentication, CustomerController.custAddFav)






module.exports = router 