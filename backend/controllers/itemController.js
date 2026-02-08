const Item = require("../models/Item")

exports.createItem = async function(request, response) {
  const item = new Item({ name: request.body.name })
  await item.save()
  response.json(item)
}

exports.getItems = async function(request, response) {
  const items = await Item.find()
  response.json(items)
}
