import { Request, Response } from 'express';
import { NewUser } from '../interfaces';
import userService from '../services/user.service';

const insert = async (req: Request, res: Response) => {
  const user = req.body as NewUser;
  
  const { status, message } = await userService.insert(user);
  
  return res.status(status).json(message);
};

export default { insert };