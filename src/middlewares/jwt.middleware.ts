import { NextFunction, Request, Response } from 'express'
import JWT from 'jsonwebtoken'

export const jwtVerify = (req: Request, res: Response, next: NextFunction) => {
    const bearer = req.headers['authorization']

    if(typeof bearer !== 'undefined') {
        try {
            let token = bearer.split(' ')[1]
            const user = JWT.verify(token, process.env.JWT_SECRET || " ")
            
            req.body.user = typeof user !== 'string' ? user._id : res.status(500).json({error: "Something went wrong"})
            next()
        } catch (error) {
            res.status(401).json({error: "Permission denied!"})
        }
    } else {
        res.status(403).json({error: "Authorization token not provided"})
    }
}