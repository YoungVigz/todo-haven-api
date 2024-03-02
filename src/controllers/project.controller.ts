import { Request, Response } from "express";
import Project from "../models/project.model";

export const findUserProjects = async (req: Request, res: Response) => {
    const projects = await Project.find({user_id: req.body.user})
        .catch(err => console.log(err))
    res.status(200).json(projects)
}

/**export const createTodo = async (req: Request, res: Response) => {

    await Todo.create({title: req.body.title, user_id: req.body.user._id}).then((todo) => {
        res.send(todo)
    }).catch(err => {
        res.send(err)
    })
}**/