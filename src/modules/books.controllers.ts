/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('books')
export class BooksController {
  constructor() {}

  @Get()
  findAll() {
    return 'Hola, estamos en el get de libros (findAll)';
  }
}
