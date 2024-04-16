import { sendpulse } from './config';

interface IObj {
  name: string;
  email: string;
  message: string;
}

const sendPulseSendInfo = async ({ name, email, message }: IObj) => {
  sendpulse.smtpSendMail((data: any) => console.log(data), {
    html: ` 
    <html>
      <body>
     <h2>Contact Information</h2>
        <p><strong>Name:</strong>${name}</p>

          <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong> ${message}</p>

      </body>
    </html>`,
    text: 'New order',
    subject: 'New costumer!',
    from: {
      name: 'Sender',
      email: 'ceo@yoyoteam.com.ua',
    },
    to: [
      {
        name: 'Виктор',
        email: 'viktorhrimli101@gmail.com',
      },
      {
        name: 'String World',
        email: 'designer@string-world.com',
      },
    ],
  });
};

const sendPulseSendPhoto = async (url: string) => {
  sendpulse.smtpSendMail((data: any) => console.log(data), {
    html: ` 
    <html>
      <body>

        <h2>Costumer picture</h2>

        <img src=${url} alt='picture'/>

        <p><a href=${url} >Link picture </a> </p>

      </body>
    </html>`,
    text: 'New order',
    subject: 'New costumer!',
    from: {
      name: 'Sender',
      email: 'ceo@yoyoteam.com.ua',
    },
    to: [
      {
        name: 'Виктор',
        email: 'viktorhrimli101@gmail.com',
      },
      {
        name: 'String World',
        email: 'designer@string-world.com',
      },
    ],
  });
};

export { sendPulseSendPhoto, sendPulseSendInfo };
