import { NextFunction, Request, Response } from 'express'
import JWT from 'jsonwebtoken'

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = JWT.verify(req.params.token, process.env.JWT_SECRET || " ")
        req.body.user = user
        
        next()
    } catch (error) {
        res.send("Acces denied")
    }
}