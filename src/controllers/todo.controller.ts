import { Request, Response } from "express";
import Todo from "../models/todo.model";

export const findListTodos = async (req: Request, res: Response) => {
    await Todo.find({list_id: req.query.list_id}).then(todo => {
        res.status(200).send(todo)
    }).catch(err => res.status(401).json(err))
}

export const createTodo = async (req: Request, res: Response) => {
    await Todo.create({content: req.body.content, project_id: req.query.project_id, list_id: req.body.list_id}).then(todo => {
        res.status(201).send(todo)
    }).catch(err => {
        res.status(401).send(err)
    })
}

export const updateTodoById = async (req: Request, res: Response) => {
    res.status(200).json({msg: "TODO"})
}

export const deleteTodoById = async (req: Request, res: Response) => {
    await Todo.deleteOne({ _id: req.params.id }).then(p => {
        res.status(201).json({msg: "Deleted succesfuly"})
    }).catch(err => res.status(401).send(err))
}