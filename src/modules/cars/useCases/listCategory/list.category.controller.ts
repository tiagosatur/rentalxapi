import { Response, Request } from 'express';

import { ListCategoryUseCase } from './list.category.usecase';

class ListCategoryController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}

  handle(request: Request, response: Response) {
    const allCategories = this.listCategoryUseCase.execute();

    return response.status(200).json(allCategories);
  }
}

export { ListCategoryController };
