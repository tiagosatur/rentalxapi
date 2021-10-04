import { Specification } from '../../models/Specification';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from '../../repositories/specifications/specifications.interface';

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const alreadyExists = this.specificationsRepository.findByName(name);

    if (alreadyExists) {
      throw new Error('Specification name already exists');
    }

    return this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
