const express = require("express")
const { createTodo } = require("./types")

const app = express()

app.use(express.json())
app.use("/", function (req, res) {
    res.send("Hi there!")
})

app.post("/todo", function (req, res) {
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            success: false,
            message: "All fields are required!"
        })
        return
    }
})

app.get("/todos", function (req, res) {

})


app.put("/completed", function (req, res) {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({
            success: false,
            message: "All fields are required!"
        })
        return
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})