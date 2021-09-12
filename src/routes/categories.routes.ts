import { Router } from 'express';

import { CategoriesRepository } from '../repositories/categories.repositories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const category = categoriesRepository.create({ name, description });

  return response.status(201).json(category);
});

export default categoriesRoutes;
