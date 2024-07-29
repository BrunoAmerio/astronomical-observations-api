import { PrismaClient } from '@prisma/client'
const { observations: Observations } = new PrismaClient()

const getController = {
  middlewares: [],
  handler: async (req, res) => {
    const { id: observation_id } = req.params
    try {
      const observation = await Observations.findFirst({
        where: {
          id: observation_id
        },
        include: {
          celestial_body: true
        }
      })

      if (!observation) {
        throw new Error('Observation not found')
      }

      res.send({ observation })
    } catch (error) {
      console.error('Error in getController', error)

      res.status(400).send({ error: error.message })
    }
  }
}

export default getController
