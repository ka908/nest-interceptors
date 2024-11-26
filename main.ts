import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BookGuard } from './book/book.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new BookGuard());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
