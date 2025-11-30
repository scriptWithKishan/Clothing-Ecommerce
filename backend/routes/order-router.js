const express = require("express")

const OrderRouter = express.Router()

const protectedRoutes = require("../middleware/protected-routes")

const { createOrder } = require("../controllers/order-controller")

OrderRouter.post("/", protectedRoutes, createOrder)

module.exports = OrderRouter

