import Joi from 'joi';

const labelRequired = '{{#label}} is required';
const labelLong = '{{#label}} length must be at least 3 characters long';

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
    'string.min': labelLong,
  });

const amountSchema = Joi.string().min(3).required().label('amount')
  .messages({
    'any.required': labelRequired,
    'string.min': labelLong,
  });

const newProductSchema = Joi.object({
  name: nameSchema,
  amount: amountSchema,
});

const userSchema = Joi.string().min(3).required().label('username')
  .messages({
    'any.required': labelRequired,
    'string.min': labelLong,
  });

const vocationSchema = Joi.string().min(3).required().label('vocation')
  .messages({
    'any.required': labelRequired,
    'string.min': labelLong,
  });

const levelSchema = Joi.number().required()
  .label('level')
  .messages({
    'any.required': labelRequired,
  });

const passSchema = Joi.string().min(8).required().label('password')
  .messages({
    'any.required': labelRequired,
    'string.min': '{{#label}} length must be at least 8 characters long',
  });

const newUserSchema = Joi.object({
  username: userSchema,
  vocation: vocationSchema,
  level: levelSchema,
  password: passSchema,
});

const productsIdsSchema = Joi.array().items(Joi.number()).required().label('productsIds')
  .messages({
    'any.required': labelRequired,
    'array.base': '{{#label}} must be an array',
  });

export { newProductSchema, loginSchema, newUserSchema, productsIdsSchema };