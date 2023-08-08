/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  findAll() {
    const books = this.booksService.findAllBooks();
    return books;
  }
}
