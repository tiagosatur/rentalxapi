import { SpecificationsRepository } from '../../repositories/specifications/specifications.repository';
import { CreateSpecificationController } from './create.specification.controller';
import { CreateSpecificationUseCase } from './create.specification.usecase';

const specificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
