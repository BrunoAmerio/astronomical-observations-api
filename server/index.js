import express from 'express'
import cors from 'cors'

// Rutas
import userRouter from './routes/users/user.routes.js'

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log('Server listen on port', PORT)
})
