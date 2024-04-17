import qqid from 'uniqid';
import path from 'path';

import { diskStorage } from 'multer';

var storage = diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, 'uploads');
  },
  filename: (req: any, file: any, cb: any) => {
    var [, extension] = file.originalname.split('.');

    cb(null, `${qqid()}.${extension}`);
  },
});

export { storage };
