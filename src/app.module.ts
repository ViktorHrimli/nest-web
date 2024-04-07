import { Module } from '@nestjs/common';

import { PaypalModule } from './paypal/paypal.module';

@Module({
  imports: [PaypalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
