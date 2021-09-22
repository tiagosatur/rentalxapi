import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/categories.repository';
import { PostgresCategoriesRepository } from '../modules/cars/repositories/postgres.categories.repository';
import { CreateCategoryService } from '../modules/cars/services/create.category.service';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const postgresCategoriesRepository = new PostgresCategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  const newCategory = createCategoryService.execute({
    name,
    description,
  });

  return response.status(201).json(newCategory);
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json(allCategories);
});

export default categoriesRoutes;
