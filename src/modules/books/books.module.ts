/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BooksController } from './books.controllers';
import { BooksService } from './books.service';

@Module({
  imports: [], // Le queremos dar a este módulo alguna funcionalidad externa.
  providers: [BooksService], // Proveedores, en este caso los servicios.
  controllers: [BooksController], // Los controladores.
  exports: [], // Si quiero que este módulo exporte alguna fincionalidad que le sea propia.
})
export class BooksModule {}
