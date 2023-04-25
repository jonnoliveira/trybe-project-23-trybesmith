import { Request, Response } from 'express';
import { NewUser } from '../interfaces';
import userService from '../services/user.service';
import { generateToken } from '../auth/validateJWT';

const insert = async (req: Request, res: Response) => {
  const user = req.body as NewUser;
  
  const { status, message } = await userService.insert(user);

  if (status) return res.status(status).json({ message });
  
  const token = generateToken(message.id, message.username);

  return res.status(201).json({ token });
};

export default { insert };