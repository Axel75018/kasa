import React from "react";
import { NavLink } from "react-router-dom";
import LOGOnb from "../../assets/images/LOGOnb.png";

const Footer2 = () => {
  return (
    <div>
      <footer>
        <NavLink to="/" className="lienFooter">
          <img src={LOGOnb} alt="Kasa" className="LogoFooter" />
        </NavLink>
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer2;
