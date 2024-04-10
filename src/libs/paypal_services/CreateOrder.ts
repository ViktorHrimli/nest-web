import { generateAccessToken } from './PaypalAccessToken';
import { handleResponse } from '../helpers/HendlerResponse';

var { BASE } = process.env;

const createOrder = async (cart: [any]) => {
  console.log(
    'shopping cart information passed from the frontend createOrder() callback:',
    cart,
  );

  const accessToken = await generateAccessToken();
  const url = `${BASE}/v2/checkout/orders`;
  const payload = {
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: cart[0].price,
        },
      },
    ],
  };

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

export { createOrder };
