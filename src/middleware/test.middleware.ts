import { Injectable, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Request, Response } from 'express';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any): any {
    if (req.method === 'DELETE') {
      console.log('REQUEST');
    } else {
      console.log();
    }

    next();
  }
}
