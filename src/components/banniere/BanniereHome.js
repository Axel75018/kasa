import React from "react";
import bkimage from "../../assets/images/banner-home.jpg";

const BanniereHome = () => {
  return (
    <div
      className="banniereHome"
      style={{ backgroundImage: `url(${bkimage})` }}
    >
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default BanniereHome;
