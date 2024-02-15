import { Router} from "express";
import { createTodo, findAllTodos, findUserTodos } from "../controllers/todo.controller";
import { jwtVerify } from "../middlewares/jwt.middleware";

export const todoRouter = Router()

todoRouter.get("/all", findAllTodos)
todoRouter.post("/", createTodo)
todoRouter.get("/", jwtVerify, findUserTodos)