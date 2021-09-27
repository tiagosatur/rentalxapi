import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from './specifications.interface';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);

    return specification;
  }

  findByName(name: string): Specification {
    const specification = this.specifications?.find(
      (spec) => spec.name === name
    );
    console.log('🚀 ~ findByName ~ a', specification);
    return specification;
  }
}

export { SpecificationsRepository };
