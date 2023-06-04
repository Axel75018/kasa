import React from "react";
import Card from "../../components/card/Card";
import BanniereHome from "../../components/banniere/BanniereHome";

const acceuil = () => {
  return (
    <div className="home">
      <h1>Accueil</h1>
      <BanniereHome />

      <Card />
    </div>
  );
};

export default acceuil;
