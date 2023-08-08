/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  constructor() {}

  findAllBooks() {
    return [
      {
        id: 1,
        title: 'Harry Potter',
        autor: 'J. K. Rowling',
      },
      {
        id: 2,
        title: 'El señor de los anillos',
        autor: 'J. R. R. Tolkien',
      },
      {
        id: 3,
        title: '1984',
        autor: 'George Orwell',
      },
    ];
  }
}
