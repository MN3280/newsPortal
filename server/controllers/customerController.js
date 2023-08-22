if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}
const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const { Customer, Article, User, Category, Favorite } = require("../models/index")
const { OAuth2Client } = require('google-auth-library')
const { Op } = require("sequelize")

class CustomerController {
    static async custRegister(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) throw { name: "EmailRequired" }
            if (!password) throw { name: "PasswordRequired" }

            const cust = await Customer.create({ email, password, role: "customer" })

            if (!cust) throw { name: "EmailExisted" }
            res.status(201).json({
                msg: {
                    id: cust.id,
                    email: cust.email,
                    password: cust.password,
                }
            })
        } catch (err) {
            next(err)
        }
    }

    static async custLogin(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) {
                throw { name: "LoginError" }
            }

            if (!password) {
                throw { name: "LoginError" }
            }
            const cust = await Customer.findOne(
                {
                    where:
                    {
                        email: email
                    }
                })
            if (!cust) throw { name: 'LoginError' }

            const isValidate = comparePassword(password, cust.password)
            if (!isValidate) throw { name: 'LoginError' }

            const token = signToken({
                id: cust.id,
                email: cust.email,
            })
            res.status(200).json({
                access_token: token,
                email: cust.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async custGoogleLogin(req, res, next) {
        try {
            const { token_google } = req.body

            const cust = new OAuth2Client({
                custId: process.env.CLIENT_ID,
            });

            const ticket = await cust.verifyIdToken({
                idToken: token_google,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = await ticket.getPayload();
            const [customer, created] = await Customer.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    email: payload.email,
                    password: payload.jti,

                    role: "customer"
                },
            });
            const token = signToken({ id: customer.id, email: customer.email });
            res.status(200).json({
                statusCode: 200,
                access_token: token,
                email: customer.email,
            });
        } catch (err) {
            next(err)
        }
    }

    static async custGetArticle(req, res, next) {
        try {
            const result = await Article.findAll({
                include: User
            })
            res.status(200).json({
                statusCode: 200,
                msg: `Here is the data`,
                result
            })
        } catch (err) {
            next(err)
        }
    }

    static async custArticleById(req, res, next) {
        try {
            const { id } = req.params
            // console.log(id);
            const getOne = await Article.findOne({ where: { id } })
            if (!getOne) throw { name: "Error not found" }
            res.status(200).json({
                message: `Article by this id ${id}`,
                getOne,
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }

    static async custCategories(req, res, next) {
        try {
            const category = await Category.findAll()
            res.status(200).json({
                message: category
            })
        } catch (err) {
            next(err)
        }
    }

    static async custFavArticle(req, res, next) {
        try {
            const data = await Favorite.findAll({
                include: {
                    model: Article
                },
                where: {
                    CustomerId: req.additionalData.id
                }
            })
            res.status(200).json({
                statusCode: 200,
                data
            })
        } catch (err) {
            next(err)
        }
    }

    static async custAddFav(req, res, next) {
        try {
            const { id, email } = req.additionalData
            const articleId = +req.params.id

            const data = await Favorite.findOrCreate({
                where: {
                    CustomerId: req.additionalData.id,
                    ArticleId: articleId
                }
            })
            res.status(200).json({
                statusCode: 200,
                data,
                createdBy: email
            })
        } catch (err) {
            next(err)
        }
    }


    static async custDeleteFav(req, res, next) {
        try {
            const { ArticleId } = req.params

            const data = await Favorite.destroy({
                where: {
                    CustomerId: req.additionalData.id,
                    ArticleId: ArticleId
                }
            })
            res.status(200).json({
                statusCode: 200,
                data,
                msg: `Your favorite with Artcile id ${ArticleId} has been removed `
            })
        } catch (err) {
            next(err)
        }
    }

    static async renderPagination(req, res, next) {
        try {
            let { limit, page, category, title } = req.query
            console.log(limit, page, category, '229')
            let where = {
                status: 'Active',
            }
            if (!limit) {
                limit = 6
            }
            if (!page) {
                page = 1
            }
            if (category) {
                where.categoryId = +category
            }
            if (!title) {
                title = ""
            }
            //search by
            if (title) {
                where.title = {
                    [Op.iLike]: `%${title}%`
                }
            }

            const data = await Article.findAndCountAll({
                include: {
                    model: Category
                },
                limit: limit, //satu halaman ada brp post (4)
                offset: (page - 1) * limit, //berapa banyak data yang mau di skip, misal ada 8 data, 1-5, berarti ada 3 data yang di skip untuk ditampilkan dulu  (rumus offset)
                order: [["title", "ASC"]],
                where: where,
            })
            const totalPage = Math.ceil(data.count / limit) // 5/4
            res.status(200).json({
                statusCode: 200,
                data,
                totalPage
            })
        } catch (err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = CustomerController