const router = require("express").Router();
const categoryController = require("../controllers/category.controller");

router.post("/", categoryController.createMainCategory);
router.get("/", categoryController.getMainCatagories);
router.post("/sub-category/:mainid", categoryController.addSubCategory);
router.get("/sub-category/:mainid", categoryController.getSubForMainCategory);

module.exports = router;
