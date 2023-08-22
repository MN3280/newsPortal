const { History } = require('../models/index')
class historyController {

    static async readHistory(req, res, next) {
        try {
            console.log("halo, <<<<<");
            const result = await History.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json({
                msg: 'Here is the data',
                result
            })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = historyController