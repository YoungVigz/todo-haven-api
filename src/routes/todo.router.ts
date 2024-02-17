import { Router} from "express";
import { createTodo, findAllTodos, findUserTodos } from "../controllers/todo.controller";
import { jwtVerify } from "../middlewares/jwt.middleware";

export const todoRouter = Router()

todoRouter.get("/", (req, res) => res.sendStatus(200))
todoRouter.post("/", (req, res) => res.sendStatus(200))
todoRouter.put("/:id", (req, res) => res.sendStatus(200))
todoRouter.delete("/:id", (req, res) => res.sendStatus(200))