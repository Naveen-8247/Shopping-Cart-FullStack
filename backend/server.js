require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const userRoutes = require("./routes/userRoutes")
const itemRoutes = require("./routes/itemRoutes")
const cartRoutes = require("./routes/cartRoutes")
const orderRoutes = require("./routes/orderRoutes")

const application = express()
application.use(cors())
application.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(function(){
  console.log("MongoDB connected")
})

application.use("/users", userRoutes)
application.use("/items", itemRoutes)
application.use("/carts", cartRoutes)
application.use("/orders", orderRoutes)

application.listen(process.env.PORT, function(){
  console.log("Server running on port 5000")
})
