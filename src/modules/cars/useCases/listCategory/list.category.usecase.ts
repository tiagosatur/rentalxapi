import { Category } from '../../models/Category';
import { ICategoriesRepository } from '../../repositories/categories/categories.interface';

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoryUseCase };
