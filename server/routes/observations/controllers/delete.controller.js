import userRoles from '../../../utils/user.roles.js'
import checkRole from '../../../middlewares/checkRole.js'

import { PrismaClient } from '@prisma/client'

const { observations: Observations } = new PrismaClient()

const deleteController = {
  middlewares: [checkRole(userRoles.admin)],
  handler: async (req, res) => {
    const { id: observation_id } = req.params

    try {
      await Observations.delete({
        where: {
          id: observation_id
        }
      })

      res.send({ message: 'Observation was deleted successfuly' })
    } catch (error) {
      console.log(error)
      res.status(400).send({ error: error.message })
    }
  }
}

export default deleteController
