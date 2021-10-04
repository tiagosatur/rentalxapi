import { CategoriesRepository } from '../../repositories/categories/categories.repository';
import { ListCategoryController } from './list.category.controller';
import { ListCategoryUseCase } from './list.category.usecase';

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoryController = new ListCategoryController(listCategoryUseCase);

export { listCategoryController };
