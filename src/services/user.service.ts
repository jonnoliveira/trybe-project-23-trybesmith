import { NewUser } from '../interfaces';
import newUserValidate from '../middlewares/newUserValidate';
import userModel from '../models/user.model';

const insert = async (user: NewUser) => {
  const { username, vocation, level, password } = user;

  if (level === 0) return { status: 422, message: '"level" must be greater than or equal to 1' };

  const validate = newUserValidate(username, vocation, level, password);
  if (validate.status) return validate;

  const message = await userModel.insert(user);

  return { status: null, message };
};

export default { insert };