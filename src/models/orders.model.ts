import { OkPacket, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Order } from '../interfaces';

const getAll = async (): Promise<Order[]> => {
  const query = `
  SELECT 
    o.id,
    o.user_id AS userId,
    JSON_ARRAYAGG(p.id) AS productsIds
  FROM
    Trybesmith.orders AS o
  INNER JOIN
    Trybesmith.products AS p
  ON
    o.id = p.order_id
  GROUP BY
    o.id`;

  const [orders] = await connection.execute<RowDataPacket[]>(query);

  return orders as Order[];
};

const insert = async (productsIds: number[], id: number): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';

  const [result] = await connection.execute<OkPacket>(query, [id]);
  const { insertId } = result;

  return insertId;
};

export default { getAll, insert };