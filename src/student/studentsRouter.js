import { Router } from "express";
import {
  getStudents,
  getStudentById,
  addStudent,
  deleteStudent,
} from "./controller.js";

const studentsRouter = Router();

studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getStudentById);
studentsRouter.post("/", addStudent);
studentsRouter.delete("/:id", deleteStudent);

export default studentsRouter;
