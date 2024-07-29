import jwt from 'jsonwebtoken'
const JWT_SECRET = process.env.JWT_SECRET
import whitelist from '../utils/whitelist.token.js'

function authenticateToken(req, res, next) {
  if (whitelist.includes(req.path)) {
    return next()
  }

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.sendStatus(401)

  jwt.verify(token, JWT_SECRET, err => {
    if (err) return res.sendStatus(403)

    next()
  })
}

export default authenticateToken
