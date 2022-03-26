import { Outlet } from 'react-router-dom';
import Bar from '../components/SideBar/Bar';

const AppLayout = () => {
  return (
    <div
      style={{
        padding: '50px 0px 0px 370px ',
      }}
    >
      <Bar />
      <Outlet />
    </div>
  );
};

export default AppLayout;
