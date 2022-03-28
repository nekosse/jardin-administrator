import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Overview.scss';

const Home: FC = () => {
  const navigate = useNavigate();

  window.electron.ipcRenderer.on('mail:error', () => {
    navigate('/tutelle', { replace: true });
  });

  window.electron.ipcRenderer.on('mail:success', () => {
    navigate('/tutelle', { replace: true });
  });

  return <div className="mainDiv">kj</div>;
};

export default Home;
