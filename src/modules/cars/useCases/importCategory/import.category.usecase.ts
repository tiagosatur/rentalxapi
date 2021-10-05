import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/categories/categories.interface';

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  // Stream send the file by pieces to the server
  // Pipe is a reading stream
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);
    const parseFile = csvParse();
    // pass the read file to parseFile
    stream.pipe(parseFile);
    parseFile.on('data', async (line) => {
      console.log('🚀 ~ parseFile.on ~ line', line);
    });
  }
}

export { ImportCategoryUseCase };
