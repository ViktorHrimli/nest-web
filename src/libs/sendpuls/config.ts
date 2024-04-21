import sendpulse from 'sendpulse-api';
import axios from 'axios';

interface IOptionsToken {
  grant_type: string;
  client_id: string;
  client_secret: string;
}

class InitialConfig {
  TOKEN = '';

  optionsAccesTokenRes: IOptionsToken = {
    grant_type: 'client_credentials',
    client_id: process.env.API_USER_ID,
    client_secret: process.env.API_SECRET,
  };

  funcServiceFethc = () => {
    axios
      .post(process.env.CLODUNARI_ACCES_TOKEN_URL, this.optionsAccesTokenRes)
      .then((res) => (this.TOKEN = res.data.access_token));
  };

  initial = () => {
    console.log(process.env.API_USER_ID);

    sendpulse.init(
      process.env.API_USER_ID || 'e2eac42310b8c42f07e954f966fca17d',
      process.env.API_SECRET || '1714c5b2e75cb8b350816ce1e945f163',
      process.env.PATH_TOKEN_CLOUDINARY || '/tmp',
      () => this.funcServiceFethc,
    );
    return sendpulse;
  };
}

var config = new InitialConfig();

export default config;
