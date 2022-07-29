const express = require("express");
const bookRouter = express.Router();
const {
  getBookList,
  getBookDetails,
  updateBook,
  deleteBook,
} = require("../controllers/books/bookControllers");

bookRouter.get("/list", getBookList);
bookRouter.get("/details/:id", getBookDetails);
bookRouter.put("/details/:id", updateBook);
bookRouter.delete("/details/:id", deleteBook);

module.exports = bookRouter;
