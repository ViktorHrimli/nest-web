import moment from 'moment-timezone';

import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpCode,
  Get,
} from '@nestjs/common';
import { UserMessangerService } from './user-messanger.service';
import { UserMessageDto } from '../libs/dto/UserDtos';
import { ValidatorMessages } from '../libs/pipes/validation.pipe.user-messaages';

@Controller('user-messanger')
export class UserMessangerController {
  constructor(private MessageService: UserMessangerService) {}
  @Post()
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  async sendMessageUser(@Body(new ValidatorMessages()) body: UserMessageDto) {
    this.MessageService.sendUserMessage(body);
    return { status: 'OK' };
  }

  @Get('/message')
  @HttpCode(200)
  async doGetMessage() {
    const now = moment().tz('Europe/Kiev');
    var curDate = now.format('YYYY-MM-DD HH:mm:ss:SSS');
    return { status: curDate };
  }
}
