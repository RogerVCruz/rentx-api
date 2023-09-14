import { Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from 'tsyringe';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    const createSpecificationUseCase = container.resolve(
      CreateSpecificationUseCase,
    );

    await createSpecificationUseCase.execute({ name, description });

    return res.sendStatus(201);
  }
}

export { CreateSpecificationController };
