const express = require("express");
const router = express.Router();

const {getAllProduct, getProductById, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller");

router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)
module.exports = router;