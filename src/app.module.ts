import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaypalModule } from './paypal/paypal.module';

import { ImageMenegerController } from './image-meneger/image-meneger.controller';
import { ImageMenegerModule } from './image-meneger/image-meneger.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PaypalModule,
    ImageMenegerModule,
  ],
  controllers: [ImageMenegerController],
})
export class AppModule {}
