import { Router } from "express";
import { createUser, login } from "../controllers/user.controller";

export const userRouter = Router()

userRouter.post("/register", createUser)
userRouter.post("/login", login)
userRouter.put("/update", (req, res) => res.status(200))