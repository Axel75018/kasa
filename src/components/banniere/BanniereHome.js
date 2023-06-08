import React from "react";

const BanniereHome = ({ h2banniere, imageBanniere }) => {
  return (
    <div
      className="banniereHome"
      style={{ backgroundImage: `url(${imageBanniere})` }}
    >
      <h2>{h2banniere}</h2>
    </div>
  );
};

export default BanniereHome;
