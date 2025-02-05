import express from "express";
import studentsRouter from "./src/student/studentsRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/students", studentsRouter);

app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`);
});
