const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/mern-todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

const Todo = require('./models/Todo');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    
    res.json(todos);
})

app.get('/todo/new', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })
})

app.listen(3001, () => console.log("Server started on Port 3001"));