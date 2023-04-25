import { newUserSchema } from '../Joi/schemas';

const typeOf = (username: string, vocation: string, level: number, password: string) => {
  if (typeof username !== 'string') return { status: 422, message: '"username" must be a string' };
  if (typeof vocation !== 'string') return { status: 422, message: '"vocation" must be a string' };
  if (typeof level !== 'number') return { status: 422, message: '"level" must be a number' };
  if (typeof password !== 'string') return { status: 422, message: '"password" must be a string' };

  return { status: null, message: '' };
};

const newUserValidate = (
  username: string, 
  vocation: string, 
  level: number,
  password: string,
) => {
  const { error } = newUserSchema.validate({ username, vocation, level, password });

  if (error) {
    if (error.message.includes('required')) return { status: 400, message: error.message };
    if (error.message.includes('length')) return { status: 422, message: error.message };
  }

  return typeOf(username, vocation, level, password);
};

export default newUserValidate;