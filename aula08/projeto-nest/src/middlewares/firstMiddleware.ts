import { NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class FirstMiddleware implements NestMiddleware {
  private readonly logger = new Logger(FirstMiddleware.name);
  use(req: Request, res: Response, next: NextFunction) {
    const date = new Date();
    this.logger.log(
      `${req.method} at ${req.url} - ${date.toLocaleTimeString()}`,
    );
    next();
  }
}
