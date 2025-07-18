const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  UserId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Product", ProductSchema);
