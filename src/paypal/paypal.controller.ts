import {
  Controller,
  Post,
  Get,
  HttpCode,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import { BodyPayPal } from '../libs/dto/BodyPaypalDtos';
import { Response } from 'express';
import {
  generateClientToken,
  captureOrder,
  createOrder,
} from '../libs/paypal_services/libs';

@Controller('paypal')
export class PaypalController {
  @Post('/api/token')
  async getToken(@Res() res: Response): Promise<any> {
    try {
      const { jsonResponse } = await generateClientToken();
      res.status(HttpStatus.OK).json(jsonResponse);
      return jsonResponse;
    } catch (error) {
      console.error('Failed to generate client token:', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: 'Failed to generate client token.' });
    }
  }

  @Post('/api/orders')
  async createOrders(
    @Body() body: BodyPayPal,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const { cart } = body;
      const { jsonResponse, httpStatusCode } = await createOrder(cart);
      res.status(HttpStatus.OK).json(jsonResponse);
    } catch (error) {
      console.error('Failed to create order:', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Failed to create order.' });
    }
  }

  @Post('/api/orders/:orderID/capture')
  async captureOrders(@Param() param: any, @Res() res: Response) {
    try {
      const { orderID } = param;

      const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error('Failed to create order:', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: 'Failed to capture order.' });
    }
  }
}
