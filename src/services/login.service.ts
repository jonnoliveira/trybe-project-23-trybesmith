import loginModel from '../models/login.model';
import loginvalidate from '../middlewares/loginvalidate';
import { NewLogin, User } from '../interfaces';

const getLogin = async (newLogin: NewLogin):
Promise<{ status: number | null; message: string | User }> => {
  const { username, password } = newLogin;

  const isValid = loginvalidate(username, password);
  if (isValid.status) return isValid;

  const user = await loginModel.findUser(newLogin);
  if (user.length === 0) return { status: 401, message: 'Username or password invalid' };

  const data = await loginModel.getLogin(newLogin);

  return { status: null, message: data };
};

export default { getLogin };