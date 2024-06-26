import { Injectable } from '@nestjs/common';

import { uploadPhotoOnCloud } from '../libs/cloudinary_api/upload_img';
import { sendPulseSendPhoto } from '../libs/sendpuls/sendpuls-api';

@Injectable()
export class ImageMenegerService {
  async downloadOnCloudImage(photo: string, id: string) {
    return await uploadPhotoOnCloud(photo, id);
  }

  async sendImageOnEmail(url: string) {
    sendPulseSendPhoto(url);
  }
}
