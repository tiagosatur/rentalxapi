import { Category } from '../../models/Category';
import {
  ICategoriesRepository,
  ICreateCategoryInput,
} from './categories.interface';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): boolean {
    console.log('🚀 ~ findByName ~ name', name);
    return null;
  }

  list(): Category[] {
    return null;
  }

  create({ name, description }: ICreateCategoryInput): Category {
    console.log('🚀 ~ create ~ name', name, description);
    return null;
  }
}

export { PostgresCategoriesRepository };
