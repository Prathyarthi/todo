const express = require("express")
const { createTodo, updateTodo } = require("./types")
const { Todo } = require("./db")
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post("/todo", async function (req, res) {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            success: false,
            message: "All fields are required!"
        })
        return
    }

    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.status(200).json({
        success: true,
        message: "Todo created!"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await Todo.find({})
    res.status(200).json({
        success: true,
        message: "Todo fetched successfully!",
        todos
    })
})


app.put("/completed", async function (req, res) {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            success: false,
            message: "All fields are required!"
        })
        return
    }

    await Todo.update({
        _id: req.body.id,
    }, {
        completed: true
    })

    res.status(200).json({
        success: true,
        message: "Todo updated!"
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})