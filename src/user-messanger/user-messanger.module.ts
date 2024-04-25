import { Module } from '@nestjs/common';
import { UserMessangerService } from './user-messanger.service';
import { UserMessangerController } from './user-messanger.controller';

@Module({
  controllers: [UserMessangerController],
  providers: [UserMessangerService],
})
export class UserMessangerModule {}
