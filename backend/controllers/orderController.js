const Cart = require("../models/Cart")
const Order = require("../models/Order")

exports.createOrder = async function(request, response) {
  const cart = await Cart.findOne({ userId: request.user._id })
  if (!cart || cart.items.length === 0) {
    return response.status(400).send("Cart is empty")
  }

  const order = new Order({
    userId: request.user._id,
    items: cart.items
  })

  await order.save()

  cart.items = []
  await cart.save()

  response.json(order)
}

exports.getOrders = async function(request, response) {
  const orders = await Order.find({ userId: request.user._id })
  response.json(orders)
}
