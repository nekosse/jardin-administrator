import { FC } from 'react';
import './App.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Home from './pages/Overview';
import Tutelle from './pages/Tutelle';
import 'react-toastify/dist/ReactToastify.css';

import AppLayout from './layout/AppLayout';
import Tutelle2 from './pages/Tutelle2';

const App: FC = () => {
  const error = () =>
    toast.error("Erreur le mail n'est pas arrivé à destination", {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const success = () =>
    toast.success('Le mail a bien été envoyé', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  window.electron.ipcRenderer.on('mail:error', () => {
    console.log('coucou');
    error();
  });

  console.log('ahahahahah');

  window.electron.ipcRenderer.on('mail:success', () => {
    console.log('coucou');
    success();
  });

  return (
    <div>
      <p>coucou</p>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tutelle" element={<Tutelle />} />
            <Route path="/tutelle/2" element={<Tutelle2 />} />
          </Route>
        </Routes>
      </HashRouter>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
