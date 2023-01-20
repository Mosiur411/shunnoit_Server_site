const { mongoose } = require("mongoose")
const MinionSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    age: {
        type: Number,
        trim: true,
        required: true
    },
    color: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true })


module.exports = {
    MinionModel: mongoose.model('Minion', MinionSchema)
}