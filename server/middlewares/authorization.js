const { Article } = require('../models/index')

const authorization = async (req, res, next) => {
    try {
        // console.log("masukAuthorization");
        const { id } = req.params
        const { userId, role } = req.additionalData
        const article = await Article.findOne({
            where: {
                id: id
            }
        })
        console.log(role);
        if (role.toLowerCase() !== "admin") {
            if (article.authorId === userId) {
                return next()
            } else {
                throw { name: "Unauthorize" }
            }
        }
        next()
    } catch (err) {
        next(err)
    }
}
module.exports = authorization