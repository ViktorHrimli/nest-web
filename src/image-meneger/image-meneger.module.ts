import { Module } from '@nestjs/common';

import { ImageMenegerController } from './image-meneger.controller';
import { ImageMenegerService } from './image-meneger.service';

@Module({
  controllers: [ImageMenegerController],
  providers: [ImageMenegerService],
})
export class ImageMenegerModule {}
