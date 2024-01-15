const mongoose = require("mongoose");

const Records = mongoose.model("Records", {
  useremail: String,
  type: String,
  addCategory: String,
  amount: String,
  dated: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Records,
};
