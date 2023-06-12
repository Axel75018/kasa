import React from "react";
import Card from "../../components/card/Card";
import imageBanniereHome from "..//..//assets//images//banner-home.jpg";
import BanniereHome from "../../components/banniere/BanniereHome";

const acceuil = () => {
  const h2banniere = "Chez vous, partout et ailleurs";
  return (
    <div className="home">
      <BanniereHome h2banniere={h2banniere} imageBanniere={imageBanniereHome} />
      {/* on passe le props h2banniere et imageBanniere dans le composant BanniereHome */}

      <Card />
    </div>
  );
};

export default acceuil;
