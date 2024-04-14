import { Router} from "express";
import { findListTodos, createTodo, updateTodoById, deleteTodoById } from "../controllers/todo.controller";

export const todoRouter = Router()

todoRouter.get("/", findListTodos)
todoRouter.post("/", createTodo)
todoRouter.put("/:id", updateTodoById)
todoRouter.delete("/:id", deleteTodoById)