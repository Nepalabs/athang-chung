const mongoose = require("mongoose");
// require(`dotenv`).config();
const { mongoURI } = require("../config");

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection errror: ", err);
    process.exit(1);
  }
};

module.exports = connectMongoDB;
