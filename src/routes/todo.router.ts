import { Router} from "express";
import { createTodo, findAllTodos } from "../controllers/todo.controller";

export const todoRouter = Router()

todoRouter.get("/", findAllTodos)
todoRouter.post("/", createTodo)