import { response, Router } from 'express';

import { CategoriesRepository } from '../repositories/categories.repositories';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category name already exists' });
  }

  const category = categoriesRepository.create({ name, description });

  return response.status(201).json(category);
});

categoriesRoutes.get('/', (request, response) => {
  const allCategories = categoriesRepository.list();

  return response.status(200).json(allCategories);
});

export default categoriesRoutes;
