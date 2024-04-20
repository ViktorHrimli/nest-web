import sendpulse from 'sendpulse-api';
import axios from 'axios';

let TOKEN = '';

interface IOptionsToken {
  grant_type: string;
  client_id: string;
  client_secret: string;
}

const optionsAccesTokenRes: IOptionsToken = {
  grant_type: 'client_credentials',
  client_id: process.env.API_USER_ID,
  client_secret: process.env.API_SECRET,
};

var funcServiceFethc = () =>
  axios
    .post(process.env.CLODUNARI_ACCES_TOKEN_URL, optionsAccesTokenRes)
    .then((res) => (TOKEN = res.data.access_token));

sendpulse.init(
  'e2eac42310b8c42f07e954f966fca17d',
  '1714c5b2e75cb8b350816ce1e945f163',
  process.env.PATH_TOKEN_CLOUDINARY || 'tmp',
  () => funcServiceFethc,
);

export { sendpulse };
