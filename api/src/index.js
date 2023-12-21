const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/sign-in", (req, res) => {
  // console.log(req.body, "GIGIG");
  const { email, password } = req.body;

  if (email === "admin" && password === "admin") {
    return res.json({
      token: "1234",
    });
  }

  res.status(401).send({
    message: "Invalid credentials",
  });
});

const port = 3002;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
