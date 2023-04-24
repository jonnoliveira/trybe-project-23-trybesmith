import ordersModel from '../models/orders.model';

const getAll = async () => {
  const data = await ordersModel.getAll();

  return { status: 200, data };
};

export default { getAll };