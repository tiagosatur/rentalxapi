import { Request, Response, Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoryController } from '../modules/cars/useCases/listCategory';
// import { PostgresCategoriesRepository } from '../modules/cars/repositories/postgres.categories.repository';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request: Request, response: Response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  }
);
export { categoriesRoutes };
