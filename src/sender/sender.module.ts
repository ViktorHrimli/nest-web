import { Module } from '@nestjs/common';

import { SenderController } from './sender.controller';

@Module({
  controllers: [SenderController],
})
export class SenderModule {}
