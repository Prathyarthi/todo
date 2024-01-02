const zod = require("zod")

const createTodo = zod.object({
    titleSchema: zod.string(),
    descriptionSchema: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo,
    updateTodo
}