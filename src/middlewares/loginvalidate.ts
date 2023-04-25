import { loginSchema } from '../Joi/schemas';

const loginvalidate = (username: string, password: string) => {
  const { error } = loginSchema.validate({ username, password });

  if (error) {
    if (error.message.includes('required')) return { status: 400, message: error.message };
    if (error.message.includes('invalid')) return { status: 401, message: error.message };
  }

  return { status: null, message: '' };
};

export default loginvalidate;