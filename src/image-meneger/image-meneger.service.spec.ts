import { Test, TestingModule } from '@nestjs/testing';
import { ImageMenegerService } from './image-meneger.service';

describe('ImageMenegerService', () => {
  let service: ImageMenegerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageMenegerService],
    }).compile();

    service = module.get<ImageMenegerService>(ImageMenegerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
