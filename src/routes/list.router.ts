import { Router } from "express";
import { createNewList, deleteList, getProjectLists, updateListName } from "../controllers/list.controller";

export const listRouter = Router()

listRouter.get("/", getProjectLists)
listRouter.post("/", createNewList)
listRouter.put("/:id", updateListName)
listRouter.delete("/:id", deleteList)