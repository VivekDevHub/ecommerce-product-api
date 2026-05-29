const { default: mongoose } = require("mongoose");
const Product = require("../models/product.model");

const getAllProduct = async (req, res) => {
  try {
    const { category } = req.query;
    // if(!category){
    //   return res.status(400).json({error : "Category is Required"})
    // }
    let filter = {};

    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter);

    if (!products) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      count: products.length,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const products = await Product.findById(id);

    if (!products) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!name) {
      return res.status(400).json({ error: "name is required" });
    }

    if (!description) {
      return res.status(400).json({ error: "description is required" });
    }

    if (!price) {
      return res.status(400).json({ error: "price is required" });
    }

    if (!category) {
      return res.status(400).json({ error: "category is required" });
    }

    if (description.trim().length < 10) {
      return res
        .status(400)
        .json({ error: "Description must be at least 10 characters long" });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      category,
    });

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      newProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "invalid product id" });
    }

    const updateProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true, //Returns updated document.
      runValidators: true, //Runs schema validation during update.
    });

    if (!updateProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      updateProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
     
        if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });


  } catch (error) {
      res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
};
