import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User, NewUser } from '../interfaces';

const insert = async (user: NewUser): Promise<User> => {
  const { username, vocation, level, password } = user;

  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: User = { id, username, vocation, level, password };
  return newUser;
};

export default { insert };