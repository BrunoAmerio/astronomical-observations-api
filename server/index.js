import express from 'express'
import cors from 'cors'
import { expressjwt } from 'express-jwt'

//Middlewares
import whitelist from './utils/whitelist.token.js'
import authenticateToken from './middlewares/authenticateToken.js'
import errorHandler from './middlewares/errorHandler.js'

// Routes
import userRouter from './routes/users/user.routes.js'
import observationRouter from './routes/observations/observation.routes.js'

const app = express()

const JWT_SECRET = process.env.JWT_SECRET
app.use(
  expressjwt({ secret: JWT_SECRET, algorithms: ['HS256'] }).unless({
    path: whitelist
  })
)

app.use(authenticateToken)

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/observation', observationRouter)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log('Server listen on port', PORT)
})
