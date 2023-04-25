import Joi from 'joi';

const labelRequired = '{{#label}} is required';

const usernameSchema = Joi.string().required().label('username')
  .messages({
    'any.required': labelRequired,
    'string.base': 'Username or password invalid',
  });

const passwordSchema = Joi.string().required().label('password')
  .messages({
    'any.required': labelRequired,
    'string.base': 'Username or password invalid',
  });

const loginSchema = Joi.object({
  username: usernameSchema,
  password: passwordSchema,
});

const nameSchema = Joi.string().min(3).required().label('name')
  .messages({
    'any.required': labelRequired,
    'string.min': '{{#label}} length must be at least 3 characters long',
  });

const amountSchema = Joi.string().min(3).required().label('amount')
  .messages({
    'any.required': labelRequired,
    'string.min': '{{#label}} length must be at least 3 characters long',
  });

const newProductSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

export { newProductSchema, loginSchema };