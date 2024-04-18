import { Injectable } from '@nestjs/common';

import { uploadPhotoOnCloud } from '../libs/cloudinary_api/upload_img';

@Injectable()
export class ImageMenegerService {
  async downloadOnCloudImage(photo: string, id: string) {
    await uploadPhotoOnCloud(photo, id);
  }
}
