import express from 'express';
import dotenv from 'dotenv';
import { createTodo, updateTodo } from './types.js';
import { Todo, connectDB } from './db.js';
import cors from 'cors';

dotenv.config()
connectDB()
const app = express();
app.use(express.json());

app.use(cors())

// body {
//     title : String,
//     description : String
// }

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload) {
        res.status(411).json({ 
            message : 'Invalid Inputs'
        });
        return
    }
    await Todo.create({
        title : createPayload.title ,
        description : createPayload.description,
        isComplete : createPayload.isComplete || false,
    });
    res.status(200).json({
        message : "Todo created successfully"
    })
})

app.get('/todos', async (req, res) => {
    const todoList = await Todo.find({});
    res.status(200).json({
        todos: todoList
    })
})

app.put('/completed', async (req, res) => {
    const givenId = req.body;
    const parsedId = updateTodo.safeParse(givenId);
    if(!parsedId) {
        res.status(411).json({
            message: 'Invalid id'
        })
    }
    await Todo.updateOne({
        _id : req.body.id,
    },{
        isComplete : true,
    })
    res.status(200).json({
        message : 'Updated successfully'
    })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
})