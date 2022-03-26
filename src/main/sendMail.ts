import { mainWindow } from './main';

const nodemailer = require('nodemailer');
//import nodemailer from 'nodemailer';

let pdfDescriptionItemList: any[] = [];

export function setList(params: any[]) {
  pdfDescriptionItemList = params;
}

export async function SendIt() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'pinot.leo@gmail.com',
      pass: '753159Asc!',
    },
  });

  let mailSubject: string = '';
  let mailText = 'Bonjour \nVeuillez trouver ci-joint la facture de M';

  pdfDescriptionItemList.forEach((pdfDescriptionItem) => {
    mailSubject += pdfDescriptionItem.name + '/';
    mailText +=
      ' ' +
      pdfDescriptionItem.name.split('_')[1] +
      ' du bon numéro ' +
      pdfDescriptionItem.name.split('_')[3].split('.')[0] +
      ',';
  });
  console.log(mailText);
  console.log(mailText.substring(0, mailText.length - 1));
  mailSubject = mailSubject.substring(0, mailSubject.length - 1);
  mailText = mailText.substring(0, mailText.length - 1);
  console.log(mailText);
  mailText += '.\nCordialement\nNicolas Pinot';
  console.log(mailText);

  const mailOptions = {
    from: 'pinot.leo@gmail.com',
    to: 'pinot.leo@gmail.com',
    subject: mailSubject,
    text: mailText,
    attachments: pdfDescriptionItemList,
  };

  transporter.sendMail(mailOptions, function (err: any, info: any) {
    if (err) {
      console.log(err);
      mainWindow?.webContents.send('mail:error');
    } else {
      console.log(info);
      mainWindow?.webContents.send('mail:success');
    }
  });
}
