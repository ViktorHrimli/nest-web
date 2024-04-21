import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { ImageMenegerService } from './image-meneger.service';
import { storage } from '../libs/storage_img/storage_img';

@Controller('image-meneger')
export class ImageMenegerController {
  constructor(private ImageService: ImageMenegerService) {}

  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file', { storage }))
  async uploadImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: '.(png|jpe?g)$' })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ) {
    var url = await this.ImageService.downloadOnCloudImage(
      './uploads/1h87e91dglv8kndjr.jpg',
      '12',
    );

    console.log(process.env.API_USER_ID);

    this.ImageService.sendImageOnEmail('./uploads/1h87e9e5clv8lfoba.jpg');

    return { msg: 'Image send succseful', status: 'OK' };
  }
}
