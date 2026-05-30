const { body } = require("express-validator");

const productValidation = [

  body("name")
    .notEmpty()
    .withMessage("Product name is required"),

  body("price")
    .notEmpty()
    .withMessage("Product price is required")
    .isNumeric()
    .withMessage("Price must be a number"),

];

module.exports = productValidation;