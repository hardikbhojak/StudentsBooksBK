const express = require("express");
const studentRouter = express.Router();
const {
  getStudList,
  getStudDetail,
  updateStudent,
  deleteStudent,
} = require("../controllers/students/studentController");

studentRouter.get("/list", getStudList);
studentRouter.get("/details/:id", getStudDetail);
studentRouter.post("/details/:id", updateStudent);
studentRouter.delete("/details/:id", deleteStudent);

module.exports = studentRouter;
