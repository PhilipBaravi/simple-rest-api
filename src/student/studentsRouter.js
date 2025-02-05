import { Router } from "express";
import { getStudents, getStudentById, addStudent } from "./controller.js";

const studentsRouter = Router();

studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.post("/", addStudent);

export default studentsRouter;
