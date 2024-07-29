import { Router } from 'express'

import getController from './controllers/get.controller.js'
import createController from './controllers/create.controller.js'

const observationRouter = Router()

observationRouter.get('/', getController.middlewares, getController.handler)

observationRouter.post(
  '/new',
  createController.middleware,
  createController.handler
)

observationRouter.put('/edit/:id')

observationRouter.delete('/delete/:id')

export default observationRouter
