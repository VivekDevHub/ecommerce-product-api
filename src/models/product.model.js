const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      required: [true, "Product price is required"],
    },

    category: {
      type: String,
      default: "",
    },

    images: {
      type: [String],  // Stores multiple image paths.
      default: [],
    },
  },
  {
    timestamps: true,   // Automatically creates:  createdAt and updatedAt
  },
);

const Product = mongoose.model("Product", productSchema);
//Aap Mongoose ko bol rahe ho ki mere productSchema (structure) ke hisab se Database mein ek 'Products' naam ka collection ready kar do."
module.exports = Product