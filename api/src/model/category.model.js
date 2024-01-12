const { default: mongoose } = require("mongoose");

const Category = mongoose.model("Category", {
  useremail: String,
  icon: String,
  category: String,
  updatedAt: Date,
  createdAt: Date,
});

module.exports = {
  Category,
};
