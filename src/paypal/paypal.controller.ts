import { Controller, Post, Get, HttpCode } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('paypal')
export class PaypalController {
  @Get()
  @HttpCode(301)
  GetToken(): string {
    return 'This action returns all cats';
  }
}
