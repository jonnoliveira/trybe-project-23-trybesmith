import jwt, { SignOptions } from 'jsonwebtoken';

const secretkey = 'process.env.JWT_SECRET';

const configJWT: SignOptions = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const generateToken = (id: number, username: string) => {
  const token = jwt.sign({ id, username }, secretkey, configJWT);
  return token;
};

const validateToken = (token: string) => {
  if (!token) return { message: 'Token not found' };
  const isValid = jwt.verify(token, secretkey);
  return isValid;
};

export {
  generateToken,
  validateToken,
};