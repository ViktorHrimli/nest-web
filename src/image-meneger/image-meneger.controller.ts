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

import { storage } from '../libs/storage_img/storage_img';

@Controller('image-meneger')
export class ImageMenegerController {
  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file', { storage }))
  uploadImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: '.(png|jpe?g)$' })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ) {
    return { msg: 'Image send succseful', status: 'OK' };
  }
}
