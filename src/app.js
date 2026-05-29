const express = require("express");
const app = express();
const productRoutes = require("./routes/product.routes");

app.use(express.json())

app.use("/products", productRoutes)

module.exports = app