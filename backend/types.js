const zod = require('zod');


const createTodo = zod.object({
    title : zod.string(),
    description : zod.string().min(5)
});

const updateTodo = zod.object({
    id: zod.string(),
    completed: zod.boolean()
});

module.exports = {
    createTodo,
    updateTodo
};