import { Controller, Get } from '@nestjs/common';
// import { LiqPay } from '../libs/liqpay/liqpay.js';

@Controller('liqpay')
export class LiqpayController {
  PRIVET_KEY = process.env.LIQPAY_SUNDBOX_PRIVET_KEY;
  PUBLIC_KEY = process.env.LIQPAY_SUNDBOX_PUBLIC_KEY;
  @Get('form')
  async checkOutLiqPay() {
    // var liqpay = new LiqPay(this.PUBLIC_KEY, this.PRIVET_KEY);
    // var html = liqpay.cnb_form({
    //   action: 'pay',
    //   amount: '1',
    //   currency: 'USD',
    //   description: 'description text',
    //   order_id: 'order_id_1',
    //   version: '3',
    // });

    return { dawdawd: 'dadadad' };
  }
}
