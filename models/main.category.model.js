const mongoose = require("mongoose");

const mainCategorySchema = mongoose.Schema(
  {
    mainTitle: {
      type: String,
      required: [true, "Main category name is required..."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MainCategory", mainCategorySchema);
