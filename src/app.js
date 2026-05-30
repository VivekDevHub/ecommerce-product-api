const express = require("express");
const app = express();
const productRoutes = require("./routes/product.routes");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error.middleware");


app.use(express.json())
app.use(cookieParser());

app.use("/products", productRoutes)

app.use(errorMiddleware);

module.exports = app