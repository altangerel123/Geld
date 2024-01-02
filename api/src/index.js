const fs = require("fs").promises;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);
  if (user) {
    return res.status(409).json({
      message: "User already exists",
    });
  }
  users.push({
    email,
    password,
  });
  await fs.writeFile(filePath, JSON.stringify(users));
  res.json({
    message: "User created",
  });
});

const port = 3002;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
