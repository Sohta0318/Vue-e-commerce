const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  // description: {
  //   type: String,
  //   trim: true,
  // },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  items: {
    type: Number,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
