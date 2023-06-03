import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
const Header2 = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="KASA" className="Logo"></img>
        <nav>
          <Link to="/" className="linkNav">
            Accueil
          </Link>
          <Link to="/a-propos" className="linkNav">
            A propos
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Header2;
