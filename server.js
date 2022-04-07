require("dotenv").config();
const express = require("express");
const db = require("./db/conn");
const app = express();

app.use(express.static("public"));
console.log(process.env);

app.get("/api/users", (_, res) => {
  DB.query("SELECT * FROM users").then((data) => {
    res.json(data.rows);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on Port ${process.env.PORT}`);
});