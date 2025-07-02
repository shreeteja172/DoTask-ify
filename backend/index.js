const express = require("express");
const { todo } = require('./db')
const app = express();
const cors = require("cors")

const { createTodo, updateTodo } = require("./types");

app.use(express.json());
app.use(cors())

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            message : "Invalid Inputs for creating a todo",
        });
    }
    // Here you would typically save the todo to a database
    await Todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    
    res.json({
        message: "To-do created"
    })
})

app.get("/todos",async function(req, res) {
    const todos = await Todo.find({})
    res.json({
        todos
    })
})

app.put("/completed",async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        return res.status(411).json({
            message : "Invalid Inputs for Updating",
        });
    }
    await Todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        message: "Todo has been marked completed!"
    })
})

app.listen(3000);