import { NextFunction, Request, Response } from "express"
import Project from "../models/project.model"

export const projectAuth = async (req: Request, res: Response, next: NextFunction) => {
    await Project.findOne({ _id: req.body.id }).then(p => {
        if(p?.user_id != req.body.user) {
            return res.status(401).send({error: "Perm denied"})
        }
        next()
    }).catch(err => res.status(404).send(err))
}

export const authCheck = async (req: Request, res: Response, next: NextFunction) => {
    await Project.findOne({ _id: req.query.project_id }).then(p => {
        if(p?.user_id != req.body.user) {
            return res.status(401).send({error: "Perm denied"})
        }
        next()
    }).catch(err => res.status(404).send(err))
}

export const projectNameValidator = (name: string): boolean => {
    if(typeof name !== 'string' || name.length < 5 || name.length > 50) {
        return false
    }

    return true
}