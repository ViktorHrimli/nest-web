import sendpulse from 'sendpulse-api';
import path from 'path';
import axios from 'axios';

let TOKEN = '';

const TOKEN_STORAGE = path.resolve('tmp/');

const optionsAccesTokenRes: any = {
  grant_type: 'client_credentials',
  client_id: process.env.API_USER_ID!,
  client_secret: process.env.API_SECRET!,
};

sendpulse.init(
  process.env.API_USER_ID,
  process.env.API_SECRET,
  TOKEN_STORAGE,
  function () {
    axios
      .post(
        'https://api.sendpulse.com/oauth/access_token',
        optionsAccesTokenRes,
      )
      .then((res) => (TOKEN = res.data.access_token));
  },
);

export { sendpulse };
