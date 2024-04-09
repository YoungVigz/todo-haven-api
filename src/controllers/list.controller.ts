import { Request, Response } from "express";
import List from "../models/list.model";

export const getProjectLists = async (req: Request, res: Response) => {
    await List.find({project_id: req.query.project_id}).then(l => {
        res.status(200).send(l)
    })
    .catch(err => res.status(404).json(err))
}

export const createNewList = async(req: Request, res: Response) => {
    await List.create({name: req.body.name, project_id: req.query.project_id}).then(l => {
        res.status(201).send(l)
    }).catch(err => res.status(401).json(err))
}

export const updateListName = async(req: Request, res: Response) => {
    res.status(200).json({msg: "TODO"})
}

export const deleteList = async(req: Request, res: Response) => {
    res.status(200).json({msg: "TODO"})
}