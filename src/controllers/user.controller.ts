import { Request, Response } from "express"
import User from '../models/user.model'
import { compare } from "bcrypt"

export const createUser = async (req: Request, res: Response) => {
    await User.create(req.body).then((user) => {
        res.send(user)
    }).catch(err => res.send(err))
}

export const login = async (req: Request, res: Response) => {

    const user = await User.findOne({email: req.body.email}).then(user => user).catch(e => e)
    const match = await compare(req.body.password, user.password)

    if(match) {
        //TODO implement JWT here
        res.send(user)
    } else {
        res.send("invalid cred")
    }
}
