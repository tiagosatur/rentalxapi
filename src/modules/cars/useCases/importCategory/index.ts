import { CategoriesRepository } from '../../repositories/categories/categories.repository';
import { ImportCategoryController } from './import.category.controller';
import { ImportCategoryUseCase } from './import.category.usecase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
