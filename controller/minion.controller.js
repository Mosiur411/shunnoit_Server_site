const { MinionModel } = require("../model/minion.Schema")

const addMinion = async (req, res) => {
    try {
        const data = req.body

        const result = await MinionModel.create(data)

        return res.status(201).json({ contact })
    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
module.exports = {
    addMinion,
}