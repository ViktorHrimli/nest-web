import { Module } from '@nestjs/common';
import { ImageMenegerController } from './image-meneger.controller';

@Module({ controllers: [ImageMenegerController] })
export class ImageMenegerModule {}
