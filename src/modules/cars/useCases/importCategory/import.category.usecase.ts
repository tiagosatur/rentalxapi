import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/categories/categories.interface';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategoriesFile(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      // Stream send the file by pieces to the server
      // Pipe is a reading stream
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = csvParse();
      // pass the read file to parseFile
      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          return resolve(categories);
        })
        .on('error', (e) => reject(e));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categoryList = await this.loadCategoriesFile(file);

    categoryList.forEach((category) => {
      const { name } = category;
      const categoryExists = this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        this.categoriesRepository.create(category);
      }
    });
  }
}

export { ImportCategoryUseCase };
