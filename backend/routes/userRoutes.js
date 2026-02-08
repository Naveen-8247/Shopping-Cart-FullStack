const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const userController = require("../controllers/userController")

router.post("/", userController.createUser)
router.get("/", userController.getUsers)
router.post("/login", userController.loginUser)
router.post("/logout", auth, userController.logoutUser)

module.exports = router
