const express = require("express")

const AuthRouter = express.Router()

const { registerController, loginController } = require("../controllers/auth-controller")

AuthRouter.post("/register", registerController)
AuthRouter.post("/login", loginController)

module.exports = AuthRouter