const mongoose = require("mongoose")
require("dotenv/config")
mongoose.connect(process.env.MONGO_URI)

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = {
    Todo
}