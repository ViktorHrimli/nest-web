import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PaypalModule } from './paypal/paypal.module';
import { SenderModule } from './sender/sender.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PaypalModule,
    SenderModule,
  ],
})
export class AppModule {}
