import { newProductSchema } from '../Joi/schemas';

const typeOf = (name: string, amount: string) => {
  if (typeof name !== 'string') return { status: 422, message: '"name" must be a string' };
  if (typeof amount !== 'string') return { status: 422, message: '"amount" must be a string' };

  return { status: null, message: '' };
};

const newProductValidate = (name: string, amount: string) => {
  const { error } = newProductSchema.validate({ name, amount });

  if (error) {
    if (error.message.includes('required')) return { status: 400, message: error.message };
    if (error.message.includes('length')) return { status: 422, message: error.message };
  }

  return typeOf(name, amount);
};

export default newProductValidate;