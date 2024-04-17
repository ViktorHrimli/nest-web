import { Test, TestingModule } from '@nestjs/testing';
import { ImageMenegerController } from './image-meneger.controller';

describe('ImageMenegerController', () => {
  let controller: ImageMenegerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageMenegerController],
    }).compile();

    controller = module.get<ImageMenegerController>(ImageMenegerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
