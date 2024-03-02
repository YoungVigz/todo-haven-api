import { Router } from "express";
import { findUserProjects } from "../controllers/project.controller";

export const projectRouter = Router()

projectRouter.get("/", findUserProjects)
projectRouter.post("/", (req, res) => res.sendStatus(200))
projectRouter.put("/:id", (req, res) => res.sendStatus(200))
projectRouter.delete("/:id", (req, res) => res.sendStatus(200))