import { Router } from 'express';
import ordersController from '../controllers/orders.controller';

const ordersRouter = Router();

ordersRouter.get('/', ordersController.getAll);
ordersRouter.post('/', ordersController.insert);

export default ordersRouter;