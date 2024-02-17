import { NextFunction, Request, Response } from "express"
import User from '../models/user.model'
import { compare } from "bcrypt"
import JWT from "jsonwebtoken"

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password, login} = req.body;

    if(!email || !password || !login)
        return res.status(400).json({ error: "Email password and login are required." });
    
    await User.create(req.body).then((user) => {
        next()
    }).catch(error => res.status(401).json({error}))
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required." });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: "Bad credentials." });
        }

        const match = await compare(password, user.password);

        if (match) {
            const token = JWT.sign({ user_id: user._id }, process.env.JWT_SECRET || " ", { expiresIn: "1h" });
            return res.status(201).json({ token });
        } 
        
        return res.status(401).json({ error: "Bad credentials." });
    
    } catch (error) {
        console.error("Error during login: ", error);
        return res.status(500).json({ error: "Internal Server Error." });
    }
}
