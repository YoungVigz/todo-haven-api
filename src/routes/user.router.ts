import { Router } from "express";
import { createUser, login, updateUser } from "../controllers/user.controller";
//import { jwtVerify } from "../middlewares/jwt.middleware";

export const userRouter = Router()

userRouter.post("/register", createUser, login)
userRouter.post("/login", login)
//userRouter.put("/update", jwtVerify, updateUser, login)