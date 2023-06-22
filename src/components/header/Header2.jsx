import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";

const Header2 = () => {
  return (
    <div>
      <header>
        <NavLink className="header__link__logo" to="/">
          <img src={logo} alt="KASA" className="header__logo" />
        </NavLink>
        <nav>
          <NavLink to="/" className="nav__link" activeclassname="nav__link--active">
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className="nav__link"
            activeclassname="nav__link--active"
          >
            A Propos
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header2;
