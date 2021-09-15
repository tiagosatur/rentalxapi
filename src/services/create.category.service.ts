import { Category } from '../models/Category';
import { CategoriesRepository } from '../repositories/categories.repositories';

interface ICreateCategoryInput {
  name: string;
  description: string;
}

/**
 * Single Responsibility Principle
 * Abstract create category business rules into a separate service (class)
 */

/**
 * Dependency Inversion Principle
 * Our category doesn't need to know the repository
 */
class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute({ name, description }: ICreateCategoryInput): Category {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category name already exists');
    }

    const newCategory = this.categoriesRepository.create({ name, description });
    return newCategory;
  }
}

export { CreateCategoryService };
