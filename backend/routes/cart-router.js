const express = require("express")

const CartRouter = express.Router()

const protectedRoutes = require("../middleware/protected-routes")

const { getCart, addToCart, removeFromCart, updateCart } = require("../controllers/cart-controller")

CartRouter.get("/", protectedRoutes, getCart)
CartRouter.post("/add", protectedRoutes, addToCart)
CartRouter.delete("/remove", protectedRoutes, removeFromCart)
CartRouter.put("/update", protectedRoutes, updateCart)

module.exports = CartRouter