import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
const generateToken = data => {
  const token = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' })

  return token
}

export default generateToken
