const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.createUser = async function(request, response) {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10)

    const newUser = new User({
      username: request.body.username,
      password: hashedPassword
    })

    await newUser.save()
    response.json({ message: "User created successfully" })

  } catch (error) {
    response.status(400).json({ message: "User already exists" })
  }
}

exports.loginUser = async function(request, response) {
  const user = await User.findOne({ username: request.body.username })
  if (!user) return response.status(400).send("Invalid username/password")

  if (user.token) {
    return response.status(403).send("User is already logged in on another device.")
  }

  const validPassword = await bcrypt.compare(request.body.password, user.password)
  if (!validPassword) return response.status(400).send("Invalid username/password")

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

  user.token = token
  await user.save()

  response.send({ token })
}

exports.logoutUser = async function(request, response) {
  request.user.token = null
  await request.user.save()
  response.send("Logged out successfully")
}

exports.getUsers = async function(request, response) {
  const users = await User.find()
  response.json(users)
}
