import uniqid from 'uniqid';
import path from 'path';

import multer from 'multer';

var upload_path = path.resolve('uploads/');

var storage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, upload_path);
  },
  filename: (req: any, file: any, cb: any) => {
    var [, extension] = file.originalname.split('.');

    cb(null, `${uniqid()}.${extension}`);
  },
});

var upload = multer({ storage: storage });

export { upload };
