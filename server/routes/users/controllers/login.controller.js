import Bcrypt from 'bcrypt'
import Joi from 'joi'
import validateSchema from '../../../middlewares/validateSchema.middleware.js'

import generateToken from '../utils/generate-token.js'
import { PrismaClient } from '@prisma/client'
const { user: User } = new PrismaClient()

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required()
})

const loginUserController = {
  middlewares: [validateSchema(loginSchema)],

  handler: async (req, res) => {
    try {
      const { email, password } = req.body

      const foundedUser = await User.findFirstOrThrow({
        where: {
          email
        }
      })

      const passwordMatch = await Bcrypt.compare(password, foundedUser.password)

      if (!passwordMatch) {
        throw new Error('Password mismatch')
      }

      const dataForToken = {
        first_name: foundedUser.first_name,
        last_name: foundedUser.last_name,
        email: foundedUser.email,
        role: foundedUser.role,
        id: foundedUser.id
      }

      const token = generateToken(dataForToken)

      res.send({ user: dataForToken, token })
    } catch (error) {
      console.error('Error in registerController', error)

      res.status(400).send({ error: error.message })
    }
  }
}

export default loginUserController
