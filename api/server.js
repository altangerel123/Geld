const fs = require("fs").promises;

const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { connectDatabase } = require("./src/database");
const { User } = require("./src/model/user.model");
const { Category } = require("./src/model/category.model");
const { Records, Records3 } = require("./src/model/records.model");

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

  const user = await User.findOne({ email: email, password: password });

  if (!user) {
    return res.status(409).json({
      message: "e-mail buruu bn",
    });
  }

  const token = jwt.sign({ email }, "sss");
  res.json({
    message: "User signed in",
    token,
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
      message: "Aldaa",
    });
  }
  try {
    const payload = jwt.verify(authorization, "sss");
    const { email } = payload;

    const profile = await User.find({ email: email });
    res.json({
      profile,
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/category", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(409).json({
      message: "Unauthorized",
    });
  }
  try {
    const { icon, category } = req.body;
    const payload = jwt.verify(authorization, "sss");
    const { email } = payload;

    await Category.create({
      useremail: email,
      icon,
      category,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    return res.json({
      message: "New category created",
    });
  } catch (error) {}
});

app.get("/clickCategory1", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(409).json({
      message: "Aldaa",
    });
  }
  try {
    const payload = jwt.verify(authorization, "sss");
    const { email } = payload;

    const category1 = await Category.find({ useremail: email });

    return res.json(category1);
  } catch (error) {
    console.log(error);
  }
});
app.post("/records", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(409).json({
      message: "Unauthorized",
    });
  }
  try {
    const { addCategory, amount, dated, recordIcon, expense } = req.body;
    const payload = jwt.verify(authorization, "sss");
    const { email } = payload;
    await Records.create({
      useremail: email,
      expense,
      addCategory,
      recordIcon,
      amount,
      dated,
      updatedAt: new Date(),
      createdAt: new Date(),
    });
    console.log(Records);
    return res.json({
      message: "New records created",
    });
  } catch (error) {
    message: "New records created";
  }
});

app.get("/recordsGet", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(409).json({
      message: "Aldaa",
    });
  }
  try {
    const payload = jwt.verify(authorization, "sss");
    const { email } = payload;

    const records3 = await Records.find({ useremail: email });
    return res.json(records3);
  } catch (error) {
    console.log(error);
  }
});

const port = 3002;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
