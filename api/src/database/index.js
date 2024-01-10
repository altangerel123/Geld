const mongoose = require("mongoose");
const connectDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AAGii:Bb80338024@cluster0.s1ac5g5.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Succesfully Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  connectDatabase,
};
