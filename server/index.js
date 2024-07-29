import express from 'express'
import cors from 'cors'
import { expressjwt } from 'express-jwt'

// Routes
import userRouter from './routes/users/user.routes.js'

const app = express()

const JWT_SECRET = process.env.JWT_SECRET
app.use(
  expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] }).unless({
    path: ['/user/login', '/user/register']
  })
)

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Server listen on port', PORT)
})
