import { NewUser } from '../interfaces';
import userModel from '../models/user.model';
import { generateToken } from '../auth/validateJWT';

const insert = async (user: NewUser) => {
  const data = await userModel.insert(user);

  const token = generateToken(data.username);
  
  return { status: 201, message: { token } };
};

export default { insert };