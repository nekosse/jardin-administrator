import { FC } from 'react';
import './App.scss';

import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Overview';
import Tutelle from './pages/Tutelle';

import AppLayout from './layout/AppLayout';
import Tutelle2 from './pages/Tutelle2';

const App: FC = () => {
  return (
    <div>
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
    </div>
  );
};

export default App;
