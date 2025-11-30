const Order = require("../models/Order")
const Cart = require("../models/Cart")
const User = require("../models/User")
const { sendOrderEmail } = require("../utility/send-email")

const createOrder = async (req, res) => {
  try {
    const { id } = req
    const { cartItems } = req.body

    const order = await Order.create({
      user: id,
      items: cartItems,
      totalPrice: cartItems.reduce((total, item) => total + (item.price * item.qty), 0),
      orderDate: new Date()
    })

    // Clear cart after order
    await Cart.findOneAndUpdate(
      { user: id },
      { $set: { items: [] } }
    )

    // Get user for email
    const user = await User.findById(id)

    // Send order confirmation email
    try {
      await sendOrderEmail(order, user)
    } catch (emailError) {
      console.error("Failed to send email:", emailError.message)
      // Don't fail the order if email fails
    }

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order
    })
  } catch (error) {
    console.error("Error creating order:", error)
    res.status(500).json({
      success: false,
      message: "Failed to create order"
    })
  }
}

module.exports = { createOrder }
