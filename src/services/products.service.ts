import { NewProduct, Product } from '../interfaces';
import newProductValidate from '../middlewares/newProductValidate';
import productsModel from '../models/products.model';

const insert = async (product: NewProduct):
Promise<{ status: number | null, message: string | Product }> => {
  const { name, amount } = product;
  
  const validate = newProductValidate(name, amount);
  if (validate.status) return validate;

  const message = await productsModel.insert(product);
  
  return { status: null, message };
};

const getAll = async (): Promise<{ status: number, message: Product[] }> => {
  const message = await productsModel.getAll();
  return { status: 200, message };
};

export default { insert, getAll };