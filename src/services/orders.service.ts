import { JwtPayload } from 'jsonwebtoken';
import { ValidToken } from '../interfaces';
import ordersModel from '../models/orders.model';
import productsModel from '../models/products.model';
import { validateToken } from '../auth/validateJWT';
import productsIdsValidate from '../middlewares/productsIdsValidate';

const getAll = async () => {
  const data = await ordersModel.getAll();

  return { status: 200, data };
};

const insert = async (productsIds: number[], authorization: string)
:Promise<{ status: null | number; message: number | JwtPayload | null | string }> => {
  if (!authorization) return { status: 401, message: 'Token not found' };

  const returnToken = validateToken(authorization);
  if (returnToken === null) return { status: 401, message: 'Invalid token' };

  const isValid = productsIdsValidate(productsIds);
  if (isValid.status) return isValid;

  const { id } = validateToken(authorization) as ValidToken;
  
  const insertId = await ordersModel.insert(productsIds, id);

  await Promise.all(productsIds.map(async (pIds) => {
    await productsModel.update(pIds, insertId);
  }));
  
  return { status: null, message: { userId: id, productsIds } };
};

export default { getAll, insert };