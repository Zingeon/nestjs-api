const Joi = require('@hapi/joi');

export const userValidationSchema = Joi.object({
    email: Joi.string().trim().email().max(50).required(),
    nickname: Joi.string().trim().max(16).required(),
    firstName: Joi.string().trim().max(16).required(),
    lastName: Joi.string().trim().max(16).required()
});