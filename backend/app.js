const express = require("express")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

dotenv.config()
const { PORT } = process.env

const connectDB = require("./config/db")
connectDB()

// Routes
const AuthRouter = require("./routes/auth-router")
const ProductRouter = require("./routes/product-router")
const CartRouter = require("./routes/cart-router")
const OrderRouter = require("./routes/order-router")

app.use("/api/auth", AuthRouter)
app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter)
app.use("/api/orders", OrderRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
