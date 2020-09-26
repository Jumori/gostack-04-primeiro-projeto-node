import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const {
    user: { password: authPassword, ...responseUser },
    token,
  } = await authenticateUser.execute({
    email,
    password,
  });

  return response.json({ user: responseUser, token });
});

export default sessionsRouter;
