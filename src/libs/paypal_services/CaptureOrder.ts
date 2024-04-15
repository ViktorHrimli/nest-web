import { generateAccessToken } from './PaypalAccessToken';
import { handleResponse } from '../helpers/HendlerResponse';

const captureOrder = async (orderID: string) => {
  const accessToken = await generateAccessToken();
  const url = `${process.env.BASE}/v2/checkout/orders/${orderID}/capture`;

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
