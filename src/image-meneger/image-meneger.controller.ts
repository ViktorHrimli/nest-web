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
import fs from 'fs/promises';
import qqid from 'uniqid';

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
    var filePath = `${file.destination}/${file.filename}`;

    var url = await this.ImageService.downloadOnCloudImage(filePath, qqid());

    this.ImageService.sendImageOnEmail(url);

    fs.unlink(filePath)
      .then(() => 'File destroy')
      .catch((e: any) => console.log(e.message));

    return { msg: url, status: 'OK' };
  }
}
