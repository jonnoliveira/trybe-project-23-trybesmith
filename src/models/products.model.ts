import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { NewProduct, Product } from '../interfaces';

const insert = async (product: NewProduct): Promise<Product> => {
  const { name, amount } = product;

  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const values = [name, amount];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newProduct: Product = { id, name, amount };
  return newProduct;
};

const getAll = async (): Promise<Product[]> => {
  const query = 'SELECT * FROM Trybesmith.products';

  const [products] = await connection.execute(query);

  return products as Product[];
};

const update = async (pIds: number, insertId: number) => {
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  const values = [insertId, pIds];

  await connection.execute(query, values);
};

export default { insert, getAll, update };