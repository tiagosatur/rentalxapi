import { Router } from 'express';

import { SpecificationsRepository } from '../modules/cars/repositories/specifications/specifications.repository';
import { CreateSpecificationService } from '../modules/cars/services/create.specification.service';

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );

  const specification = createSpecificationService.execute({
    name,
    description,
  });

  return res.status(201).send(specification);
});

export { specificationRoutes };
