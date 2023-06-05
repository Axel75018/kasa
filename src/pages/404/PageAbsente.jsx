import React from "react";
import { NavLink } from "react-router-dom";

const PageAbsente = () => {
  return (
    <div className="page404">
      <h1 className="er404">404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/" className="linkAccueil">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default PageAbsente;
