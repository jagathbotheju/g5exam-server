const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema(
  {
    subTitle: {
      type: String,
      required: [true, "Sub Category name is required"],
    },
    mainCatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainCategory",
      required: [true, "Main Category name is required"],
    },
    description: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
