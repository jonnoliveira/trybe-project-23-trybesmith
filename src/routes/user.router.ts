import { Router } from 'express';
import userController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/', userController.insert);

export default usersRouter;
