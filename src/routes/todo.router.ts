import { Router} from "express";
import { findListTodos, createTodo, updateTodoById, deleteTodoById } from "../controllers/todo.controller";
import { authCheck } from "../middlewares/project.middleware";


export const todoRouter = Router()

todoRouter.get("/", authCheck, findListTodos)
todoRouter.post("/", authCheck, createTodo)
todoRouter.put("/:id", authCheck, updateTodoById)
todoRouter.delete("/:id", authCheck, deleteTodoById)