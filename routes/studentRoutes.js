const express = require("express");
const studentRouter = express.Router();
const {
  getStudList,
  getStudDetail,
  updateStudent,
  deleteStudent,
  addStudent,
} = require("../controllers/students/studentController");

studentRouter.get("/list", getStudList);
studentRouter.get("/details/:id", getStudDetail);
studentRouter.post("/details/:id", updateStudent);
studentRouter.delete("/details/:id", deleteStudent);
studentRouter.post("/addstudent", addStudent);

module.exports = studentRouter;
