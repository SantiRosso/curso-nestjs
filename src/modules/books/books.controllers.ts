/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookEntity } from './entities/book.entity';
import { CreateBookDto } from './dtos/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async findAll(): Promise<BookEntity[]> {
    const books: BookEntity[] = await this.booksService.findAllBooks();
    return books;
  }

  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<BookEntity> {
    const newBook: BookEntity = await this.booksService.createBook(
      createBookDto,
    );
    return newBook;
  }
}
