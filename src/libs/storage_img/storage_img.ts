import uniqid from 'uniqid';
import path from 'path';

import { diskStorage } from 'multer';

// var upload_path = path.resolve('/uploads');

var storage = diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, 'uploads');
  },
  filename: (req: any, file: any, cb: any) => {
    var [, extension] = file.originalname.split('.');

    cb(null, `test.${extension}`);
  },
});

export { storage };
