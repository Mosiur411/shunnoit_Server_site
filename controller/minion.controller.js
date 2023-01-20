const { MinionModel } = require("../model/minion.Schema")
/*  Minion ad */
const addMinion = async (req, res) => {
    try {
        const data = req.body
        let result;
        if (data) {
            result = await MinionModel.create(data)
        }
        if (result) {
            return res.status(201).json({ result })
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
/*  Minion Get */
const GetMinion = async (req, res) => {
    try {
        const result = await MinionModel.find({})
        return res.status(201).json({ result })

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
/*  Minion Update */

const updateMinion = async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        let result;
        if (data && id) {
            result = await MinionModel.updateMany({ _id: id }, { $set: data }, {
                runValidators: true,
            })
        }
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}
/*  Minion delete */
const DeleteMinion = async (req, res) => {
    try {
        const id = req.params.id
        let result;
        if (id) {
            result = await MinionModel.findByIdAndDelete({ _id: id })
        }
        if (result) {
            return res.status(200).json(result)
        }

    } catch (err) {
        const errorMessage = errorMessageFormatter(err)
        return res.status(500).json(errorMessage)
    }
}


module.exports = {
    addMinion, GetMinion, updateMinion, DeleteMinion
}