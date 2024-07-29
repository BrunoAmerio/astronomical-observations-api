import { Router } from 'express'

import getController from './controllers/get.controller.js'
import createController from './controllers/create.controller.js'
import editController from './controllers/edit.controller.js'

const observationRouter = Router()

observationRouter.get('/', getController.middlewares, getController.handler)

observationRouter.post(
  '/new',
  createController.middleware,
  createController.handler
)

observationRouter.put(
  '/edit/:id',
  editController.middleware,
  editController.handler
)

observationRouter.delete('/delete/:id')

export default observationRouter
