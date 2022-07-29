const db = require("../../config/db");

exports.getStudList = async (req, res) => {
  const data = await db.select().from("Students");
  return res.status(200).json({ status: true, data });
};
exports.getStudDetail = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const data = await db.select().from("Students").where("id", "=", id);
  return res.status(200).json({ status: true, data: data[0] });
};

exports.updateStudent = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log(req.body);
  const { firstname, lastname } = req.body;
  const data = await db("Students")
    .where("id", "=", id)
    .update({ firstname: firstname, lastname: lastname });
  return res.status(200).json({ status: true, data });
};

exports.deleteStudent = async (req, res) => {
  const id = req.params.id;
  const data = await db("Students").where("id", "=", id).del();
  return res.status(200).json({ status: true, data });
};
