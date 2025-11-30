const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
      },
      name: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: true
      },
      qty: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ["pending", "shipped", "delivered", "cancelled"],
    default: "pending"
  }
}, { timestamps: true })

const Order = mongoose.model("Order", OrderSchema)

module.exports = Order