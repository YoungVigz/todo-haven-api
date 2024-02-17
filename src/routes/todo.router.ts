import { Router} from "express";
import { createTodo, findAllTodos, findUserTodos } from "../controllers/todo.controller";
import { jwtVerify } from "../middlewares/jwt.middleware";

export const todoRouter = Router()

/**
 * TODO:
 * 
 * GET /todo
 * POST /todo
 * PUT /todo/:id
 * DELETE /todo/:id
 * **/


todoRouter.get("/all", findAllTodos)
todoRouter.post("/", jwtVerify, createTodo)
todoRouter.get("/:token", jwtVerify, findUserTodos)