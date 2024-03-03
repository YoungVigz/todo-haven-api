import { Router } from "express";
import { findUserProjects, createProject, updateProjectName, deleteProject } from "../controllers/project.controller";
import { projectAuth } from "../middlewares/project.middleware";

export const projectRouter = Router()

projectRouter.get("/", findUserProjects)
projectRouter.post("/", createProject)
projectRouter.put("/:id", projectAuth, updateProjectName)
projectRouter.delete("/:id", projectAuth, deleteProject)