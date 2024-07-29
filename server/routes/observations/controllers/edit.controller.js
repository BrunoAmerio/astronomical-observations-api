import Joi from 'joi'
import validateSchema from '../../../middlewares/validateSchema.middleware.js'

import { PrismaClient } from '@prisma/client'
const { observations: Observations } = new PrismaClient()

const editSchema = Joi.object({
  notes: Joi.string().required()
})

const editController = {
  middleware: [validateSchema(editSchema)],
  handler: async (req, res) => {
    const { id: user_id } = req.auth
    const { id: observation_id } = req.params
    const { notes } = req.body

    try {
      const observation = await Observations.findFirst({
        where: {
          id: observation_id,
          user_id
        }
      })

      if (!observation) {
        throw new Error('Observation not found')
      }

      const updatedObservation = await Observations.update({
        where: {
          id: observation_id,
          user_id
        },
        data: {
          notes
        }
      })

      res.send({
        message: 'Observation updated successfuly',
        observation: updatedObservation
      })
    } catch (error) {
      console.error('Error in editController', error)

      res.status(400).send({ error: error.message })
    }
  }
}

export default editController
