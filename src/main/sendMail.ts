import { BrowserWindow } from 'electron';
import nodemailer from 'nodemailer';

export default class SendMail {
  mainWindow: BrowserWindow;

  pdfDescriptionItemList: any[];

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    this.pdfDescriptionItemList = [];
  }

  setList(params: any[]) {
    this.pdfDescriptionItemList = params;
  }

  SendIt() {
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

    let mailSubject = '';
    let mailText = 'Bonjour \nVeuillez trouver ci-joint la facture de M';

    this.pdfDescriptionItemList.forEach((pdfDescriptionItem) => {
      mailSubject += `${pdfDescriptionItem.name}/`;
      mailText += ` ${pdfDescriptionItem.name.split('_')[1]} du bon numéro ${
        pdfDescriptionItem.name.split('_')[3].split('.')[0]
      },`;
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
      attachments: this.pdfDescriptionItemList,
    };

    transporter.sendMail(mailOptions, (err: any, info: any) => {
      if (err) {
        console.log(err);
        this.mainWindow.webContents.send('mail:error');
      } else {
        console.log(info);
        this.mainWindow.webContents.send('mail:success');
      }
    });
  }
}
