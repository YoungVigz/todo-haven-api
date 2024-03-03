import { Router } from "express";
import { createNewList, deleteList, getProjectLists, updateListName } from "../controllers/list.controller";
import { authCheck } from "../middlewares/project.middleware";

export const listRouter = Router()

listRouter.get("/", authCheck, getProjectLists)
listRouter.post("/", authCheck, createNewList)
listRouter.put("/:id", authCheck, updateListName)
listRouter.delete("/:id", authCheck, deleteList)