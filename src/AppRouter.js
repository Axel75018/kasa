import React from "react";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/home/Home";
import Logements from "./pages/logements/Logements";
import About from "./pages/a-propos/About";
import PageAbsente from "./pages/404/PageAbsente";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Acceuil />} />
      <Route path="/logement/:id" element={<Logements />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/404" element={<PageAbsente />} />
      <Route path="*" element={<PageAbsente />} />
    </Routes>
  );
};

export default AppRouter;
