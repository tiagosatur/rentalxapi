import { Specification } from '../models/Specification';
import { ISpecificationsRepository } from '../repositories/specifications/specifications.interface';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): Specification {
    const alreadyExists = this.specificationsRepository.findByName(name);

    if (alreadyExists) {
      throw new Error('Specification name already exists');
    }

    return this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationService };
