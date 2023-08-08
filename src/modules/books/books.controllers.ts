/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookEntity } from './entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async findAll(): Promise<BookEntity[]> {
    const books: BookEntity[] = await this.booksService.findAllBooks();
    return books;
  }
}
