import { Request, Response } from 'express';
import { NewProduct } from '../interfaces';
import * as productsService from '../services/products.service';

const insert = async (req: Request, res: Response) => {
  const product = req.body as NewProduct;
  
  const { status, data } = await productsService.insert(product);
  
  return res.status(status).json(data);
};

const getAll = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.getAll();

  return res.status(status).json(data);
};

export { insert, getAll };