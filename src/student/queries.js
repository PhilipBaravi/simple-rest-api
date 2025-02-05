export const getStudentsQuery = "SELECT * FROM students";
export const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
export const checkEmailExistsQuery = "SELECT * FROM students WHERE email = $1";
export const insertStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4) RETURNING *";
