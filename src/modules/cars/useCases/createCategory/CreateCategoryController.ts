import { Response, Request } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from 'tsyringe';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ description, name });

    return res.sendStatus(201);
  }
}

export { CreateCategoryController };
