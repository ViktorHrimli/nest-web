import { Module } from '@nestjs/common';

import { GateWay } from './notifications-gateway';

@Module({
  providers: [GateWay],
})
export class NotificationsModule {}
