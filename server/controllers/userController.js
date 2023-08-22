const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt')
const { User } = require('../models/index')
const { OAuth2Client } = require('google-auth-library')

class userController {
    static async readUser(req, res, next) {
        try {
            const user = await User.findAll()
            res.status(200).json({
                message: user
            })
        } catch (err) {
            next(err)
        }
    }

    static async register(req, res, next) {
        try {
            const { userName, email, password, phoneNumber, address } = req.body

            const created = await User.create({ userName, email, password, phoneNumber, address, role: 'admin' })
            res.status(201).json({
                msg: {
                    id: created.id,
                    username: created.userName,
                    email: created.email,
                    password: created.password,
                    phoneNumber: created.phoneNumber,
                    address: created.address
                }
            })
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email || !password) {
                throw { name: "LoginError" }
            }
            const user = await User.findOne(
                {
                    where:
                    {
                        email: email
                    }
                })
            if (!user) throw { name: 'LoginError' }

            const isValidate = comparePassword(password, user.password)

            if (!isValidate) throw { name: 'LoginError' }

            const token = signToken({
                id: user.id,
                email: user.email,
                role: user.role
            })
            res.status(200).json({
                access_token: token,
                username: user.userName,
                role: user.role,
                email: user.email
            })
        } catch (err) {
            next(err)
        }
    }

    static async googleLogin(req, res, next) {
        try {
            const { token_google } = req.body
            const client = new OAuth2Client({
                clientId: process.env.CLIENT_ID,
            });

            const ticket = await client.verifyIdToken({
                idToken: token_google,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = await ticket.getPayload();
            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                defaults: {
                    email: payload.email,
                    userName: payload.given_name,
                    password: payload.jti,
                    phoneNumber: "12345678",
                    address: "mana aja",
                    role: "staff",
                },
            });
            const token = signToken({ id: user.id, email: user.email });

            res.status(200).json({
                statusCode: 200,
                access_token: token,
                email: user.email,
                username: user.userName,
                role: user.role
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userController