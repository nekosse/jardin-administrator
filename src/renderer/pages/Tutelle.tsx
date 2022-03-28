import { FC, useEffect, useState } from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import MailList from 'renderer/components/MailList/MailList';
import PDFList from 'renderer/components/PDFList/PDFList';
import { PDFDescriptionItem } from 'renderer/models/PdfDescriptionItem';
import './Tutelle.scss';

const Tutelle: FC = () => {
  const [pdfList, setPDFList] = useState<PDFDescriptionItem[]>([]);

  const [mailList, setMailList] = useState<string[]>([]);

  window.electron.ipcRenderer.on('fileList', (args: string[][]) => {
    const pdfDescriptionItemList: PDFDescriptionItem[] = [];

    for (let i = 0; i < args[0].length; i += 1) {
      pdfDescriptionItemList.push({
        name: args[0][i],
        path: `/home/geovelo/Téléchargements/${args[0][i]}`,
        contentType: 'application/pdf',
        active: false,
      });
    }
    setPDFList(pdfDescriptionItemList);
    setMailList(args[1]);
  });
  useEffect(() => {
    window.electron.ipcRenderer.getData('/home/geovelo/Téléchargements');
  }, []);

  const sendMail = () => {
    window.electron.ipcRenderer.sendMail(
      pdfList.filter((item) => item.active === true)
    );
    window.location.reload();
  };

  return (
    <div className="mainTutelle">
      <div className="lists">
        <PDFList pdfList={pdfList} path="/home/geovelo/Téléchargements" />
        <MailList mailList={mailList} />
      </div>
      <div
        className="send"
        onClick={sendMail}
        onKeyDown={undefined}
        role="button"
        tabIndex={0}
      >
        <div className="send__icon">
          <RiMailSendLine size={50} />
        </div>
        <h2>Envoyer</h2>
      </div>
    </div>
  );
};

export default Tutelle;
