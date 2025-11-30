const Cart = require("../models/Cart")
const Product = require("../models/Product")

const getCart = async (req, res) => {
  try {
    const { id } = req

    let cart = await Cart.findOne({ user: id })
    if (!cart) {
      cart = await Cart.create({ user: id, items: [] })
    }

    res.status(200).json({
      success: true,
      message: "Cart fetched successfully",
      cart
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const addToCart = async (req, res) => {
  try {
    const { id } = req

    const { productId, quantity } = req.body

    const cart = await Cart.findOne({ user: id })
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found"
      })
    }

    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }

    await Cart.findOneAndUpdate(
      { user: id },
      { $push: { items: { product: productId, qty: quantity } } },
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: "Product added to cart successfully",
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const removeFromCart = async (req, res) => {
  try {
    const { id } = req

    const { productId } = req.body

    const cart = await Cart.findOne({ user: id })
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found"
      })
    }

    await Cart.findOneAndUpdate(
      { user: id },
      { $pull: { items: { product: productId } } },
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: "Product removed from cart successfully",
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const updateCart = async (req, res) => {
  try {
    const { id } = req

    const { productId, quantity } = req.body

    const cart = await Cart.findOne({ user: id })
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found"
      })
    }

    await Cart.findOneAndUpdate(
      { user: id },
      { $set: { items: { product: productId, qty: quantity } } },
      { new: true }
    )

    res.status(200).json({
      success: true,
      message: "Product updated in cart successfully",
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = { getCart, addToCart, removeFromCart, updateCart }