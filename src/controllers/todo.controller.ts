import { Request, Response } from "express";
import Todo from "../models/todo.model";

export const findAllTodos = async (req: Request, res: Response) => {
    res.send(await Todo.find())
}

export const createTodo = async (req: Request, res: Response) => {
    await Todo.create(req.body).then((todo) => {
        res.send(todo)
    }).catch(err => {
        res.send(err)
    })
}