const express = require("express");
const router = express.Router();

const {getAllProduct, getProductById} = require("../controllers/product.controller");

router.get("/", getAllProduct);
router.get("/:id", getProductById);


module.exports = router;