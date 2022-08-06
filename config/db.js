const knex = require("knex");
require("dotenv").config();

const DBHOST = process.env.DB_URL;
const DBNAME = process.env.DB_NAME;
const DBUSER = process.env.DB_USER;
const DBPASSWORD = process.env.DB_PASSWORD;
const DBPORT = process.env.DB_PORT;

const db = knex({
  client: "pg",
  connection: {
    // connectionString: "database-01.cjivshkf3r8n.us-west-2.rds.amazonaws.com",
    // ssl: { rejectUnauthorized: false },
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "library",
  },
});

module.exports = db;
