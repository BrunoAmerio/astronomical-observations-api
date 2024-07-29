import Joi from 'joi'
import validateSchema from '../../../middlewares/validateSchema.middleware.js'

import { PrismaClient } from '@prisma/client'
const { observations: Observations } = new PrismaClient()

const createObservationSchema = Joi.object({
  notes: Joi.string().required(),
  celestial_body_id: Joi.string().required()
})

const createController = {
  middleware: [validateSchema(createObservationSchema)],
  handler: async (req, res) => {
    const { notes, celestial_body_id } = req.body
    const user_id = req.auth.id

    try {
      const newObservation = await Observations.create({
        data: {
          notes,
          user_id,
          celestial_body_id
        }
      })

      res.status(201).json(newObservation)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

export default createController
