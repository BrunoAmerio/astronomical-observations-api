import Joi from 'joi'

const createObservationSchema = Joi.object({
  notes: Joi.string().required(),
  celestial_body_id: Joi.string().required()
})

export default createObservationSchema
