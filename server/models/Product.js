const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  description: String,
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;
