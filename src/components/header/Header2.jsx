import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";

const Header2 = () => {
  return (
    <div>
      <header>
        <NavLink className="Logo" to="/">
          <img src={logo} alt="KASA" className="Logo" />
        </NavLink>
        <nav>
          <NavLink to="/" className="linkNav" activeclassname="nav-active">
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className="linkNav"
            activeclassname="nav-active"
          >
            A Propos
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header2;
