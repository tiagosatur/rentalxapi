import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './create.category.usecase';

// const postgresCategoriesRepository = new PostgresCategoriesRepository();

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const newCategory = this.createCategoryUseCase.execute({
      name,
      description,
    });
    return response.status(201).json(newCategory);
  }
}

export { CreateCategoryController };
