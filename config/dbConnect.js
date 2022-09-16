const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected ${conn.connection.host}`.yellow.underline);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;
