import { Router } from "express"
import { todoRouter } from "./todo.router"
import { userRouter } from "./user.router"

export const mainRouter = Router()

mainRouter.use("/todo", todoRouter)
mainRouter.use("/user", userRouter)