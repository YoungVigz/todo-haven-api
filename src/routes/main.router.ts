import { Router } from "express"
import { todoRouter } from "./todo.router"

export const mainRouter = Router()

mainRouter.use("/todo", todoRouter)