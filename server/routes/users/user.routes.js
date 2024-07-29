import { Router } from 'express'

import registerUserController from './controllers/register.controller.js'
import loginUserController from './controllers/login.controller.js'

const userRouter = Router()

userRouter.post(
  '/register',
  registerUserController.middlewares,
  registerUserController.handler
)

userRouter.post(
  '/login',
  loginUserController.middlewares,
  loginUserController.handler
)

export default userRouter
