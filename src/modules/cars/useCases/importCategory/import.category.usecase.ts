class ImportCategoryUseCase {
  // constructor() {}

  execute(file: Express.Multer.File): void {
    console.log('🚀 ~ execute', file);
  }
}

export { ImportCategoryUseCase };
