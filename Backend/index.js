const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "Project-370",
  password: "Rafi123@",
});







app.listen(8081, () => {
  console.log("Server is running on port 8081");
});
