import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
const Header2 = () => {
  return (
    <div>
      <header>
        <NavLink to="/">
          <img src={logo} alt="KASA" className="Logo" />
        </NavLink>
        <nav>
          <NavLink
            to="/"
            className={(nav) =>
              nav.isActive ? "nav-active linkNav" : "linkNav"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={(nav) =>
              nav.isActive ? "nav-active linkNav" : "linkNav"
            }
          >
            A propos
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header2;
