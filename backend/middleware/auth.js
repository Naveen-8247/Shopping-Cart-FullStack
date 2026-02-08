const jwt = require("jsonwebtoken")
const User = require("../models/User")

module.exports = async function(request, response, next) {
  const token = request.header("Authorization")

  if (!token) return response.status(401).send("Access denied")

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  const user = await User.findById(decoded.id)

  if (!user || user.token !== token) {
    return response.status(401).send("Invalid session")
  }

  request.user = user
  next()
}
