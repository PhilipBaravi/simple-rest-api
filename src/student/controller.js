import { pool } from "../../db.js";
import {
  getStudentsQuery,
  getStudentByIdQuery,
  checkEmailExistsQuery,
  insertStudentQuery,
} from "./queries.js";

export const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

export const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  // Check if email does exist
  pool.query(checkEmailExistsQuery, [email], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database error" });
    }

    if (results.rows.length) {
      return res.status(400).json({ message: "Email already exists." });
    }

    // If email doesn't exist
    pool.query(
      insertStudentQuery,
      [name, email, age, dob],
      (error, results) => {
        if (error) {
          return res.status(500).json({ error: "Failed to add student" });
        }
        res.status(201).json({
          message: "Student added successfully",
          student: results.rows[0],
        });
      }
    );
  });
};
