const express = require("express")
const {createTodo, updateTodo} = require("./types");
const { todo } = require("./db");

const app = express();
app.use(express.json())

app.post("/todo", async function(req, res){
    const createTodoPayload = req.body;
    const parsedPayload = createTodo.safeParse(createTodoPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createTodoPayload.title,
        description: createTodoPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created"
    })

})

app.get("/todos", async function(req, res) {
     const todos = await todo.find();

     res.json({
        todos
     })
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }

    await todo.update({
        _id: updatePayload.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo is updated"
    })

})

app.listen(3000, () => {
    console.log("App is running at PORT 3000")
})