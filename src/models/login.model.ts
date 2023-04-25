import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { NewLogin, User } from '../interfaces';

const findUser = async (newLogin: NewLogin): Promise<User[]> => {
  const { username, password } = newLogin;

  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const values = [username, password];

  const [result] = await connection.execute<RowDataPacket[]>(query, values);

  return result as User[];
};

const getLogin = async (newLogin: NewLogin): Promise<User> => {
  const { username, password } = newLogin;

  const query = 'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?';
  const values = [username, password];

  const [result] = await connection.execute<RowDataPacket[]>(query, values);

  return result[0] as User;
};

export default { getLogin, findUser };