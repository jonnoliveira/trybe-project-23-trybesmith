import Joi from 'joi';

const usernameSchema = Joi.string().required().label('username')
  .messages({
    'any.required': '{{#label}} is required',
    'string.base': 'Username or password invalid',
  });

const passwordSchema = Joi.string().required().label('password')
  .messages({
    'any.required': '{{#label}} is required',
    'string.base': 'Username or password invalid',
  });

const loginSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

export default loginSchema;