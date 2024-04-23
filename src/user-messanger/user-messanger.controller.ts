import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UserMessageDto } from '../libs/dto/UserDtos';
import { ValidatorMessages } from '../libs/pipes/validation.pipe.user-messaages';

@Controller('user-messanger')
export class UserMessangerController {
  @Post()
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  async sendMessageUser(@Body(new ValidatorMessages()) body: UserMessageDto) {
    return { status: 'OK' };
  }
}
