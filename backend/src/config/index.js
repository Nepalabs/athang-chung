const dotenv = require("dotenv");
const { mongo } = require("mongoose");

dotenv.config();

module.exports = {
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
};
