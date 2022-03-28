import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Bar from '../components/SideBar/Bar';
import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => {
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
    error();
  });

  window.electron.ipcRenderer.on('mail:success', () => {
    success();
  });

  return (
    <div
      style={{
        padding: '0px 0px 0px 320px ',
      }}
    >
      <Bar />
      <Outlet />

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

export default AppLayout;
