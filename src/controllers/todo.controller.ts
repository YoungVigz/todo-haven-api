import { Request, Response } from "express";
import Todo from "../models/todo.model";

export const findAllTodos = async (req: Request, res: Response) => {
    res.send(await Todo.find())
}

export const findUserTodos = async (req: Request, res: Response) => {
    const todos = await Todo.find({user_id: req.body.user.user._id}).catch(err => console.log(err))
    
    res.send(todos)
}

export const createTodo = async (req: Request, res: Response) => {

    await Todo.create({title: req.body.title, user_id: req.body.user.user._id}).then((todo) => {
        res.send(todo)
    }).catch(err => {
        res.send(err)
    })
}