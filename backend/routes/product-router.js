const express = require("express")

const ProductRouter = express.Router()

const { getAllProducts, getProductById } = require("../controllers/product-controller")

ProductRouter.get("/", getAllProducts)
ProductRouter.get("/:id", getProductById)

module.exports = ProductRouter