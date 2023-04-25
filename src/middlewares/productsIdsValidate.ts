import { productsIdsSchema } from '../Joi/schemas';

const emptyArray = (productsIds: number[]) => {
  if (productsIds.length === 0) {
    return { status: 422, message: '"productsIds" must include only numbers' };
  }

  return { status: null, message: '' };
};

const productsIdsValidate = (productsIds: number[]) => {
  const { error } = productsIdsSchema.validate(productsIds);

  if (error) {
    if (error.message.includes('required')) return { status: 400, message: error.message };
    if (error.message.includes('array')) return { status: 422, message: error.message };
  }

  return emptyArray(productsIds);
};

export default productsIdsValidate;