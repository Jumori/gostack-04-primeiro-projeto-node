import { Router } from 'express';

import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const { password: cryptedPassword, ...userWithoutPassword } = user;

    return response.json(userWithoutPassword);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
