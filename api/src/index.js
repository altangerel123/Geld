const fs = require("fs").promises;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectDatabase } = require("./database");
const { User } = require("./model/user.model");

const app = express();
connectDatabase();
app.use(cors());
app.use(bodyParser.json());

app.post("/sign-up", async (req, res) => {
  const { email, password } = req.body;
  const users = await User.findOne({ email: email });
  if (users) {
    return res.status(409).json({
      message: "User already exists",
    });
  }
  await User.create({
    name: "hello",
    email,
    password,
    updatedAt: new Date(),
    createdAt: new Date(),
  });

  const token = jwt.sign({ email }, "sss");
  res.json({
    message: "User created",
    token,
  });
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

app.get("/users", async (req, res) => {
  const users = await User.find({ name: "hello" });

  res.json(users);
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
    const profile = users.filter((user) => user.email === email);
    res.json({
      profile,
    });
  } catch (err) {
    console.lor(err);
  }
});

app.post("/records", async (req, res) => {
  const { authorization } = req.headers;
});

const port = 3002;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
