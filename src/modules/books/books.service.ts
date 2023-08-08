/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { BookEntity } from './entities/book.entity';
import { CreateBookDto } from './dtos/create-book.dto';

@Injectable()
export class BooksService {
  stock: BookEntity[];
  constructor() {
    this.stock = [
      {
        id: 1,
        title: 'Harry Potter',
        author: 'J. K. Rowling',
      },
      {
        id: 2,
        title: 'El señor de los anillos',
        author: 'J. R. R. Tolkien',
      },
      {
        id: 3,
        title: '1984',
        author: 'George Orwell',
      },
    ];
  }

  async findAllBooks(): Promise<BookEntity[]> {
    return this.stock;
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const newBook: BookEntity = {
      id: this.stock.length + 1,
      title: createBookDto.title,
      author: createBookDto.author,
    };
    this.stock.push(newBook);
    return newBook;
  }
}
