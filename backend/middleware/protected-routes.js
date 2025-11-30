const jwt = require("jsonwebtoken")

const { JWT_SECRET } = process.env

const protectedRoutes = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Header is missing or invalid"
      })
    }

    const token = authHeader.split(" ")[1]
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided"
      })
    }

    const decoded = jwt.verify(token, JWT_SECRET)

    let id = decoded.id
    req.id = id
    next()
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: `Unauthorized: ${err.message}`
    })
  }
}

module.exports = protectedRoutes