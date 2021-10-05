import { ImportCategoryController } from './import.category.controller';
import { ImportCategoryUseCase } from './import.category.usecase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
