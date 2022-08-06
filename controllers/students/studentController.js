const db = require("../../config/db");

exports.getStudList = async (req, res) => {
  const data = await db.select().from("students");
  return res.status(200).json({ status: true, data });
};
exports.getStudDetail = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await db.select().from("students").where("id", "=", id);
  return res.status(200).json({ status: true, data: data[0] });
};

exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  const { first, last } = req.body;
  const data = await db("students")
    .where("id", "=", id)
    .update({ firstname: first, lastname: last });
  return res.status(200).json({ status: true, data });
};

exports.addStudent = async (req, res) => {
  // const fname = req.body.fname;
  // const lname = req.body.lname;
  // const data = { firstname: fname, lastname: lname };
  console.log(req.body);
  await db("students").insert(req.body);

  res.status(200).json({ status: "Success" });
};

exports.deleteStudent = async (req, res) => {
  const id = req.params.id;
  const data = await db("students").where("id", "=", id).del();
  return res.status(200).json({ status: true, data });
};
