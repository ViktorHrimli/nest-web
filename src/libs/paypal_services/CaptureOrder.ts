import { generateAccessToken } from './PaypalAccessToken';
import { handleResponse } from '../helpers/HendlerResponse';

var { BASE } = process.env;

const captureOrder = async (orderID: number) => {
  const accessToken = await generateAccessToken();
  const url = `${BASE}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

export { captureOrder };
