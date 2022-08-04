import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {

  private readonly logger = new Logger(LoggerInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const body = request.body;
    const params = request.params;
    const query = request.query;

    this.logger.log(`${request.method} ${request.url}`)

    if (Object.keys(params).length > 0)
      this.logger.log(`params: ${JSON.stringify(params)}`)
    if (Object.keys(query).length > 0)
      this.logger.log(`query: ${JSON.stringify(query)}`)
    if (Object.keys(body).length > 0)
      this.logger.log(`body: ${JSON.stringify(body)}`)

    return next
      .handle()
      .pipe(
        tap(content => {
          this.logger.log(`response: ${JSON.stringify(content)}`)
        }),
      );
  }
}
