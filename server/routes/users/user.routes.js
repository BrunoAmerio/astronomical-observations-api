import { Router } from 'express'

import registerUserController from './controllers/register.controller.js'

const userRouter = Router()

userRouter.post(
  '/register',
  registerUserController.middlewares,
  registerUserController.handler
)

export default userRouter
