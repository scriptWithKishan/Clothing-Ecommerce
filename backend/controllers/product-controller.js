const Product = require("../models/Product")

const getAllProducts = async (req, res) => {
  try {
    const { category, size, minPrice, maxPrice, page, limit, search } = req.query

    const query = {}

    const pageNum = parseInt(page) || 1
    const limitNum = parseInt(limit) || 8

    if (category && category !== "all") query.category = category
    if (size) query.size = size
    if (minPrice || maxPrice) {
      query.price = {}
      if (minPrice) query.price.$gte = Number(minPrice)
      if (maxPrice) query.price.$lte = Number(maxPrice)
    }
    if (search) query.$or = [
      {
        name: {
          $regex: search,
          $options: "i"
        }
      },
      {
        description: {
          $regex: search,
          $options: "i"
        }
      }
    ]

    const products = await Product.find(query)
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum)

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params
    const product = await Product.findById(id)

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found"
      })
    }

    return res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: product
    })

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

module.exports = {
  getAllProducts,
  getProductById
}