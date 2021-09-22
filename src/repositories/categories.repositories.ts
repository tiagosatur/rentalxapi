import { Category } from '../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryInput,
} from './categories.repository.interface';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryInput): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): boolean {
    return this.categories.some((cat) => cat.name === name);
  }
}

export { CategoriesRepository };
