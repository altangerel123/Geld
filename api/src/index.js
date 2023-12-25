const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(auth());

app.post("/sign-in", (req, res) => {
  const headers = req.headers;
  const a = headers.authorization;
  if (!a) {
    res.status(401).json({
      message: "Unauthorized -6",
    });
    return;
  }
  try {
    jwt.verify(a, "secret-key");
  } catch (e) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  const { email, password } = req.body;

  const token = jwt.sign({ email }, "secret-key", { expiresIn: "1h" });
  res.json({
    token,
  });
});

const port = 3002;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
