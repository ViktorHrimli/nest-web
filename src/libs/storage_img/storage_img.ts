import qqid from 'uniqid';

import { diskStorage } from 'multer';

var storage = diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, process.env.PATH_UPLOADS_PHOTO);
  },
  filename: (req: any, file: any, cb: any) => {
    var [, extension] = file.originalname.split('.');

    cb(null, `${qqid()}.${extension}`);
  },
});

export { storage };
