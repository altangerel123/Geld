const fs = require("fs").promises;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/sign-up", async (req, res) => {
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
  const token = jwt.sign({ email }, "sss");
  res.json({
    message: "User created",
    token,
  });
});

app.get("/profile", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(409).json({
      message: "aldaa",
    });
  }
  try {
    const read = jwt.verify(authorization, "sss");
    const { email } = read;
    const filePath = "src/data/users.json";

    const usersRaw = await fs.readFile(filePath, "utf8");

    const users = JSON.parse(usersRaw);
    const user1 = users.filter((user) => user.email === email);
    res.json({
      user1,
    });
  } catch (err) {
    console.lor(err);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const filePath = "src/data/users.json";

  const usersRaw = await fs.readFile(filePath, "utf8");

  const users = JSON.parse(usersRaw);

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(409).json({
      message: "e-mail buruu bn",
    });
  }
  if (user.password !== password) {
    return res.status(409).json({
      message: "pass buruu bn",
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
