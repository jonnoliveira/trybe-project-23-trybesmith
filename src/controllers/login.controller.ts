import { Request, Response } from 'express';
import { generateToken } from '../auth/validateJWT';
import loginService from '../services/login.service';
import { NewLogin } from '../interfaces';

const getLogin = async (req: Request, res: Response) => {
  const newLogin = req.body as NewLogin;

  const { status, message } = await loginService.getLogin(newLogin);
  
  if (status) return res.status(status).json({ message });
  
  if (typeof message !== 'string') {
    const token = generateToken(message.id, message.username);
    return res.status(200).json({ token });
  }
};

export default { getLogin };