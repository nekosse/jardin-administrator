import { useEffect, useState } from 'react';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Tutelle.scss';

const Tutelle2: FC = () => {
  const [mailList, setmailList] = useState<String[]>();
  const navigate = useNavigate();

  useEffect(() => {
    window.electron.ipcRenderer.getMailList();
  }, []);

  window.electron.ipcRenderer.on('mail:list', (_event, args) => {
    console.log('MAILLIST');
    setmailList(args);
  });

  const sendMail = () => {
    window.electron.ipcRenderer.sendMail();
    navigate('/tutelle', { replace: true });
  };

  return (
    <div className="mainTutelle">
      <div className="tutelleElem">
        <h1 className="stepTitle">Etape 2 : Choisisez les mails</h1>
        <button onClick={sendMail}>Notify!</button>

        <div>
          {mailList?.map((item) => (
            <p> {item} </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tutelle2;
