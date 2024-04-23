import { Module } from '@nestjs/common';
import { UserMessangerService } from './user-messanger.service';

@Module({
  providers: [UserMessangerService]
})
export class UserMessangerModule {}
