import { Category } from '../models/Category';

// DTO = Data Transfer Object
interface ICreateCategoryInput {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): boolean;
  list(): Category[];
  create({ name, description }: ICreateCategoryInput): Category;
}

export { ICategoriesRepository, ICreateCategoryInput };
