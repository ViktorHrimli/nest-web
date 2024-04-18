import { v2 } from 'cloudinary';

var cloudinary = v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECREET,
});

export { cloudinary };
