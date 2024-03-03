import { Request, Response } from "express";
import Project from "../models/project.model";
import { projectNameValidator } from "../middlewares/project.middleware";

export const findUserProjects = async (req: Request, res: Response) => {
    await Project.find({user_id: req.body.user}).then(p => {
        res.status(200).json(p)
    }).catch(err => res.status(404).json({error: "Not found"}))
}

export const createProject = async (req: Request, res: Response) => {
    await Project.create({name: req.body.name, user_id: req.body.user}).then(p => {
        res.status(201).send(p)
    }).catch(err => res.status(401).send(err))
}

export const updateProjectName = async (req: Request, res: Response) => {
    if(projectNameValidator(req.body.name)) {
        await Project.updateOne({ _id: req.params.id}, {name: req.body.name}).then(p => {
            res.status(201).send(p)
        }).catch(err => res.status(401).send(err))
    } else {
        return res.status(403).json({error: "Invalid project name"})
    }
}

export const deleteProject = async (req: Request, res: Response) => {
    // TODO: before deleting project need to clear all todos connected to it.

    await Project.deleteOne({ _id: req.params.id }).then(p => {
        res.status(201).json({msg: "Deleted succesfuly"})
    }).catch(err => res.status(401).send(err))
}