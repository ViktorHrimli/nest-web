import { Injectable } from '@nestjs/common';
import { sendPulseSendInfo } from '../libs/sendpuls/sendpuls-api';
import { UserMessageDto } from '../libs/dto/UserDtos';
@Injectable()
export class UserMessangerService {
  async sendUserMessage(body: UserMessageDto) {
    sendPulseSendInfo(body);
  }
}
