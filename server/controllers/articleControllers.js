const { User, Article, History } = require('../models/index')

class Controller {
    static async readArticle(req, res, next) {
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

    static async createArticle(req, res, next) {
        try {
            const { title, content, imgUrl, categoryId } = req.body

            console.log(title, content, imgUrl, categoryId);

            const authorId = req.additionalData.userId

            const create = await Article.create({ title, content, imgUrl, authorId, categoryId })
            if (!create) {
                throw { name: "Validation Error" }
            }

            await History.create({
                title,
                description: `New entity with id ${create.id} created`,
                updateBy: req.additionalData.email
            })
            res.status(201).json({
                message: `Your data has been created`,
                create
            })
        } catch (err) {
            next(err)
        }
    }

    static async getOneArticle(req, res, next) {
        try {
            const { id } = req.params
            const getOne = await Article.findOne({ where: { id } })
            if (!getOne) throw { name: "Error not found" }
            res.status(200).json({
                message: `Article by this id ${id}`,
                getOne
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteArticle(req, res, next) {
        try {
            const { id } = req.params
            const result = await Article.findOne({ where: { id } })

            const deleted = await Article.destroy({ where: { id } })

            if (!deleted) {
                throw { name: "Error not found" }
            }
            res.status(200).json({
                message: `${result.title} success to delete`
            })
        } catch (err) {
            next(err)
        }
    }

    static async replaceArticle(req, res, next) {
        try {
            const { id } = req.params
            const { title, content, imgUrl, categoryId } = req.body

            const result = await Article.update({ title, content, imgUrl, categoryId }, {
                where: { id }
            })
            if (!result) throw { name: "Validation Error" }

            await History.create({
                title,
                description: `Entity with id ${id} updated`,
                updateBy: req.additionalData.email
            })
            res.status(201).json({
                msg: `Data with id ${id} updated`
            })
        } catch (err) {
            next(err)
        }
    }

    static async modifiedArticle(req, res, next) {
        try {
            const { id } = req.params
            const { status } = req.body

            const dataBefore = await Article.findByPk(id)
            const result = await Article.update({ status }, {
                where: { id }
            })
            if (!result) throw { name: "Validation Error" }

            await History.create({
                title: dataBefore.title,
                description: `Entity status with id ${id} has been updated from ${dataBefore.status} into ${status}`,
                updateBy: req.additionalData.email
            })
            res.status(200).json({
                msg: `Data with id ${id} modified`
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller