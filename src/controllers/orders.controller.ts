import { Request, Response } from 'express';
import ordersService from '../services/orders.service';
import { Order, Token } from '../interfaces';

const getAll = async (_req: Request, res: Response) => {
  const { status, data } = await ordersService.getAll();

  return res.status(status).json(data);
};

const insert = async (req: Request, res: Response) => {
  const { productsIds } = req.body as Order;
  const { authorization } = req.headers as Token;

  const { status, message } = await ordersService.insert(productsIds, authorization);
  if (status) return res.status(status).json({ message });
  
  return res.status(201).json(message);
};

export default { getAll, insert };