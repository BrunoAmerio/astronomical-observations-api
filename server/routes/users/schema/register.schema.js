import Joi from 'joi'

const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  password: Joi.string().min(5).required()
})

export default registerSchema
