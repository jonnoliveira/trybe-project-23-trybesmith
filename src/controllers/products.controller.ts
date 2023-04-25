import { Request, Response } from 'express';
import { NewProduct } from '../interfaces';
import productsService from '../services/products.service';

const insert = async (req: Request, res: Response) => {
  const product = req.body as NewProduct;
  
  const { status, message } = await productsService.insert(product);
  if (status) return res.status(status).json({ message });
  
  return res.status(201).json(message);
};

const getAll = async (_req: Request, res: Response) => {
  const { status, message } = await productsService.getAll();

  return res.status(status).json(message);
};

export default { insert, getAll };