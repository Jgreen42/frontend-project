

//requires dotenv enviroment variables such as port and database URL if you shall have a port already
//existing go ahead and change it to a open local port.
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