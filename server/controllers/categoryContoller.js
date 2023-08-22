const { Category } = require('../models/index')

class categoryController {
    static async readCategory(req, res, next) {
        try {
            const category = await Category.findAll()
            res.status(200).json({
                message: category
            })
        } catch (err) {
            next(err)
        }
    }

    static async createCategory(req, res, next) {
        try {
            const { name } = req.body
            const create = await Category.create({ name })
            if (!create) throw { name: "SequelizeValidationError" }
            res.status(201).json({
                message: `Your data has been created`,
                create
            })
        } catch (err) {
            next(err)
        }
    }

    static async deleteCategories(req, res, next) {
        try {
            const { id } = req.params
            const result = await Category.findOne({
                where: {
                    id
                }
            })
            const deleted = await Category.destroy({
                where: {
                    id
                }
            })
            if (!deleted) throw { name: "Error" }
            res.status(200).json({
                message: `${result.name} success to delete`
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = categoryController