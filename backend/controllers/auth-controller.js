const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const dotenv = require("dotenv")
dotenv.config()

const User = require("../models/User")

const { JWT_SECRET } = process.env

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body

    const user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    })

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET, { expiresIn: "4d" })

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      },
      message: "User registered successfully"
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password)

    if (!isPasswordMatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials"
      })
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "4d" })

    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      message: "User logged in successfully"
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

module.exports = { registerController, loginController }