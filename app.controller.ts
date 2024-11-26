import { Controller, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { AppInterceptor } from './app.interceptor';
import { Request, Response } from 'express';
@Controller('app')
export class AppController {
  @Post()
  @UseInterceptors(AppInterceptor)
  getHello(): any {
    return 'this is post';
  }
}
