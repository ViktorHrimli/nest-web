import { v2 } from 'cloudinary';

class InitialConfig {
  initialCloudinary() {
    var cloudinary = v2;

    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECREET,
    });
    return cloudinary;
  }
}

var config = new InitialConfig();

export default config;
