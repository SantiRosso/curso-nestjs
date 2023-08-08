import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';

@Module({
  imports: [BooksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
