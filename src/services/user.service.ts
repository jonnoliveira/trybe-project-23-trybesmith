import { NewUser } from '../interfaces';
import userModel from '../models/user.model';

const insert = async (user: NewUser) => {
  const data = await userModel.insert(user);

  return { status: null, message: data };
};

export default { insert };