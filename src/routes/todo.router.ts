import { Router} from "express";
import { createTodo, findAllTodos, findUserTodos } from "../controllers/todo.controller";

export const todoRouter = Router()

todoRouter.get("/all", findAllTodos)
todoRouter.post("/", createTodo)
todoRouter.get("/", findUserTodos)