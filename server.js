
require("dotenv").config();
const express = require("express");
const db = require("./conn");
const app = express();

app.use(express.static("public"));
console.log(process.env);

app.get("/api/users", (_, res) => {
  db.query("SELECT * FROM users").then((data) => {
    res.json(data.rows);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on Port ${process.env.PORT}`);
});