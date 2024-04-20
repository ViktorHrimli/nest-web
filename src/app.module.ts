import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaypalModule } from './paypal/paypal.module';
import { ImageMenegerModule } from './image-meneger/image-meneger.module';

import configuration from './libs/config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, cache: true }),
    PaypalModule,
    ImageMenegerModule,
  ],
})
export class AppModule {}
