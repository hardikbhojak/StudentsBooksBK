const db = require("../../config/db");

exports.getBookList = async (req, res) => {
  const data = await db
    .select()
    .from("books")
    .leftJoin("students", "books.Borrowedby", "students.id");
  return res.status(200).json({ status: true, data });
};

exports.getBookDetails = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await db
    .select()
    .from("books")
    .where("Bookid", "=", id)
    .leftJoin("students", "books.Borrowedby", "students.id");
  console.log(data);
  return res.status(200).json({ status: true, data: data[0] });
};

exports.updateBook = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  const { bookname, authorname, borroweddate, returnbefore } = req.body;
  const data = await db("books").where("Bookid", "=", id).update({
    Bookname: bookname,
    Author: authorname,
    // Borrowedby: borrowedby,
    Borroweddate: borroweddate,
    Returndate: returnbefore,
  });
  return res.status(200).json({ status: true, data });
};

exports.addBook = async (req, res) => {
  console.log(req.body);
  await db("books").insert(req.body);
  return res.status(200).json({ status: true });
};

exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  const data = await db("books").where("Bookid", "=", id).del();
  return res.status(200).json({ status: true, data });
};
