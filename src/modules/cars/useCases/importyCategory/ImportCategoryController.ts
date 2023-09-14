import { Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import { container } from 'tsyringe';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);
    return res.sendStatus(201);
  }
}

export { ImportCategoryController };
