import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaypalModule } from './paypal/paypal.module';
import { ImageMenegerModule } from './image-meneger/image-meneger.module';
import { UserMessangerController } from './user-messanger/user-messanger.controller';
import { UserMessangerModule } from './user-messanger/user-messanger.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true, cache: true }),
    PaypalModule,
    ImageMenegerModule,
    UserMessangerModule,
  ],
  controllers: [UserMessangerController],
})
export class AppModule {}
