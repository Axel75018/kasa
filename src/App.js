import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/home/Home';
import Logements from './pages/logements/Logements';

import About from './pages/a-propos/About';
import PageAbsente from './pages/404/PageAbsente';
import Header2 from './components/Header2';
import Footer2 from './components/Footer2';
const App = () => {
  return (
    <BrowserRouter>
      <Header2 />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/logements" element={<Logements />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="*" element={<PageAbsente />} />
      </Routes>
      <Footer2 />
    </BrowserRouter>
  );
};

export default App;
