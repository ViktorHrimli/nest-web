import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaypalModule } from './paypal/paypal.module';
import { ImageMenegerModule } from './image-meneger/image-meneger.module';

import { UserMessangerModule } from './user-messanger/user-messanger.module';
import { TestMiddleware } from './middleware/test.middleware';
import { LiqpayModule } from './liqpay/liqpay.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, cache: true }),
    PaypalModule,
    ImageMenegerModule,
    UserMessangerModule,
    LiqpayModule,
  ],
})
export class AppModule implements NestMiddleware {
  constructor() {}
  use(req: any, res: any, next: (error?: any) => void) {
    next();
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TestMiddleware)
      .forRoutes({ path: 'ab*cd', method: RequestMethod.DELETE });
  }
}
