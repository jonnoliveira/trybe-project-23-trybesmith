import { NewProduct } from '../interfaces';
import * as productsModel from '../models/products.model';

const insert = async (product: NewProduct) => {
  const data = await productsModel.insert(product);
  
  return { status: 201, data };
};

const getAll = async () => {
  const data = await productsModel.getAll();
  return { status: 200, data };
};

export { insert, getAll };