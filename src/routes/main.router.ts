import { Router } from "express"
import { todoRouter } from "./todo.router"
import { userRouter } from "./user.router"
import { projectRouter } from "./project.router"
import { jwtVerify } from "../middlewares/jwt.middleware"
import { listRouter } from "./list.router"

export const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/project", jwtVerify, projectRouter)
mainRouter.use("/list", jwtVerify, listRouter)
mainRouter.use("/todo", todoRouter)
