import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/home/Home';
import Logements from './pages/logements/Logements';

import About from './pages/a-propos/About';
import PageAbsente from './pages/404/PageAbsente';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<PageAbsente />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
