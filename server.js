const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const bookRouter = require("./routes/bookRoutes");
const studentRouter = require("./routes/studentRoutes");

app.use(express.json());
app.use(cors());

app.use("/book", bookRouter);
app.use("/student", studentRouter);

app.listen(4000, () => {
  console.log("Welcome to the express  app!");
});

// app.get("/students", (req, res) => {
//   console.log("students");
//   return db
//     .select("*")
//     .from("Students")
//     .then((data) => res.json(data));
// });
