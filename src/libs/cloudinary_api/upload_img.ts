import config from './config';

const uploadPhotoOnCloud = async (photo: string, id: string) => {
  var cloudinary = config.initialCloudinary();

  await cloudinary.uploader
    .upload(photo, {
      public_id: id,
    })
    .then((data: any) => {})
    .catch((err: any) => {
      console.log(err);
    });

  const url = cloudinary.url(id, {
    Crop: 'fill',
  });

  return url;
};

export { uploadPhotoOnCloud };
