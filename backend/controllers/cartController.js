const Cart = require("../models/Cart")

exports.addToCart = async function(request, response) {
  let cart = await Cart.findOne({ userId: request.user._id })

  if (!cart) {
    cart = new Cart({ userId: request.user._id, items: [] })
  }

  cart.items.push(request.body.itemId)
  await cart.save()

  response.json(cart)
}

exports.getCart = async function(request, response) {
  const cart = await Cart.findOne({ userId: request.user._id })
  response.json(cart)
}
