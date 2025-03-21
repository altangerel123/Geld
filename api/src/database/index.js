const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Succesfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
