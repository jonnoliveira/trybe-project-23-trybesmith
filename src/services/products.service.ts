import { NewProduct } from '../interfaces';
import newProductValidate from '../middlewares/newProductValidate';
import productsModel from '../models/products.model';

const insert = async (product: NewProduct) => {
  const { name, amount } = product;
  
  const validate = newProductValidate(name, amount);
  if (validate.status) return validate;

  const message = await productsModel.insert(product);
  
  return { status: null, message };
};

const getAll = async () => {
  const message = await productsModel.getAll();
  return { status: 200, message };
};

export default { insert, getAll };