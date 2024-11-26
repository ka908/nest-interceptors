import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

import { BookDto } from './data/book.dto';

export class BookPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    console.log(value, metadata, typeof value);
    //changing value(object) to class
    const bookClass = plainToInstance(BookDto, value);
    console.log(
      bookClass,
      metadata,
      typeof bookClass,
      bookClass instanceof BookDto,
    );
    const err = await validate(bookClass);
    if (err.length > 0) {
      throw new BadRequestException();
    }
    return value;
  }
}
