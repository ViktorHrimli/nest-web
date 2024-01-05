import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from 'src/libs/dto/UserDtos';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('tuturutututu')
  kek(@Query('lols') lols: string) {
    return { tt: lols };
  }
}
