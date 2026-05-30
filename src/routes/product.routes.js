const express = require("express");
const router = express.Router();

const {getAllProduct, getProductById, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller");
const productValidation = require("../validations/product.validation");
const validationMiddleware = require("../middleware/validation.middleware");
const authMiddleware = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");

router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post(
  "/",
  authMiddleware,
  upload.array("images", 5),
  productValidation,
  validationMiddleware,
  createProduct
);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)
module.exports = router;