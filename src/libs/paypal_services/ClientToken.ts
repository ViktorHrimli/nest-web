import { generateAccessToken } from './PaypalAccessToken';
import { handleResponse } from '../helpers/HendlerResponse';

var { BASE } = process.env;

const generateClientToken = async () => {
  const accessToken = await generateAccessToken();
  const url = `${BASE}/v1/identity/generate-token`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',
    },
  });

  return handleResponse(response);
};

export { generateClientToken };
