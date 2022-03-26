import { useEffect, useState, FC } from 'react';

import { useNavigate } from 'react-router-dom';
import './Tutelle.scss';

const Tutelle2: FC = () => {
  const [mailList, setmailList] = useState<string[]>();
  const navigate = useNavigate();

  useEffect(() => {
    window.electron.ipcRenderer.getMailList();
  }, []);

  window.electron.ipcRenderer.on('mail:list', (_event, args) => {
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
        <button type="button" onClick={sendMail}>
          Notify!
        </button>

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
