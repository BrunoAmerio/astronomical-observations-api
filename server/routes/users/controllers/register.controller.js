import validateSchema from '../../../middlewares/validateSchema.middleware.js'
import registerSchema from '../schema/register.schema.js'

import Bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
const { user: User } = new PrismaClient()

const registerUserController = {
  middlewares: [validateSchema(registerSchema)],

  handler: async (req, res) => {
    try {
      const newUserData = req.body

      newUserData.password = await Bcrypt.hash(newUserData.password, 10)

      const newUser = await User.create({ data: newUserData })

      res.send({ user: newUser })
    } catch (error) {
      console.log('Error in registerController', error)
      res.status(400).send({ error: `error ${error.message}` })
    }
  }
}

export default registerUserController
