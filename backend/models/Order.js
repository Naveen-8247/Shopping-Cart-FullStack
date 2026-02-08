const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Order", orderSchema)
