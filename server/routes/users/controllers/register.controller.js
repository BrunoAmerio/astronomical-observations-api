import Bcrypt from 'bcrypt'
import Joi from 'joi'
import validateSchema from '../../../middlewares/validateSchema.middleware.js'

import { PrismaClient } from '@prisma/client'
const { user: User } = new PrismaClient()

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().min(5).required()
})

const registerUserController = {
  middlewares: [validateSchema(registerSchema)],

  handler: async (req, res) => {
    try {
      const newUserData = req.body

      newUserData.password = await Bcrypt.hash(newUserData.password, 10)

      const newUser = await User.create({ data: newUserData })

      res.send({ user: newUser })
    } catch (error) {
      console.error('Error in registerController', error)

      res.status(400).send({ error: error.message })
    }
  }
}

export default registerUserController
