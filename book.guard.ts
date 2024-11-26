import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

export class BookGuard implements CanActivate {
  public username: string = 'kaka';
  public password: string = '123';

  canActivate(context: ExecutionContext): boolean {
    const cotxt = context.switchToHttp();
    const req = cotxt.getRequest<Request>();
    if (
      req.header('username') == undefined ||
      req.header('password') == undefined
    )
      return false;
    console.log('BookGuard');
    return (
      req.header('username') == this.username &&
      req.header('password') == this.password
    );
  }
}
