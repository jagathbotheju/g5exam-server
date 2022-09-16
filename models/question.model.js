const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    year: Number,
    number: Number,
    category: String,
    subCategory: String,
    answer: Number,
    userAnswer: Number,
    questionBody: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
