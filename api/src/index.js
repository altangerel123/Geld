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

  const user1 = await User.findOne({ email: email });

  if (!user1) {
    return res.status(409).json({
      message: "e-mail buruu bn",
    });
  }
  const user2 = await User.findOne({ password: password });
  if (!user2) {
    return res.status(409).json({
      message: "pass buruu bn",
    });
  }

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

    const profile = User.filter((user) => user.email === email);
    res.json({
      profile,
    });
  } catch (err) {
    console.log(err);
  }
});

// app.post("/records", async (req, res) => {
//   const { authorization } = req.headers;
// });

const port = 3002;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
