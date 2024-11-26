import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { BookDto } from './data/book.dto';
import { BookGuard } from './book.guard';

@Controller('book')
export class BookController {
  @Get('/:id')
  getByID(@Param('id', ParseIntPipe) id: number): string {
    console.log(id, typeof id);
    return `Book with id  is selected`;
  }

  @Post('/add')
  addBook(@Body(new ValidationPipe()) book: BookDto): string {
    return `Book inserted`;
  }
}
