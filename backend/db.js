const mongoose = require('mongoose');

// mongodb+srv://singhpratik0001:Password1@cluster0.xjpikdj.mongodb.net/todos
mongoose.connect("mongodb+srv://singhpratik0001:Password1@cluster0.xjpikdj.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema)

module.exports = {
    todo
}