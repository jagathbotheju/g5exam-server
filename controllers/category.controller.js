const asyncHandler = require("express-async-handler");
const MainCategory = require("../models/main.category.model");
const SubCategory = require("../models/sub.category.model");
const _ = require("lodash");

module.exports.getSubForMainCategory = asyncHandler(async (req, res, next) => {
  const { mainid } = req.params;

  if (!mainid) {
    res.status(400);
    return next(new Error("Main Categoriy ID required"));
  }

  const subCats = await SubCategory.find({ mainCatId: mainid });
  if (_.isEmpty(subCats)) {
    res.status(400);
    return next(new Error("Sub Catagories not found for thid Main Catagory"));
  }

  res.status(200).json(subCats);
});

module.exports.getMainCatagories = asyncHandler(async (req, res, next) => {
  const mainCats = await MainCategory.find();

  if (!mainCats) {
    res.status(400);
    return next(new Error("Main Catagories Not Found"));
  }
  res.status(200).json(mainCats);
});

module.exports.addSubCategory = asyncHandler(async (req, res, next) => {
  const { mainid: mainCatId } = req.params;
  const { subTitle } = req.body;

  if (!subTitle) {
    res.status(400);
    return next(new Error("Sub Category Name required"));
  }

  const subcat = await SubCategory.create({
    subTitle,
    mainCatId,
  });
  res.status(201).json(subcat);
});

module.exports.createMainCategory = asyncHandler(async (req, res, next) => {
  const { mainTitle } = req.body;

  if (!mainTitle) {
    res.status(400);
    return next(new Error("Main Category Name required"));
  }
  const category = await MainCategory.create({
    mainTitle,
  });

  res.status(201).json(category);
});
