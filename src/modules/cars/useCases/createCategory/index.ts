import { CategoriesRepository } from '../../repositories/categories/categories.repository';
import { CreateCategoryController } from './create.category.controller';
import { CreateCategoryUseCase } from './create.category.usecase';

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
