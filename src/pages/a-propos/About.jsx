import React from "react";
import Collapse2 from "../../components/collapse/Collapse2";
import BanniereHome from "../../components/banniere/BanniereHome";
import imageBanniereAbout from "..//..//assets//images//banner-about.jpg";

const About = () => {
  return (
    <div>
      <BanniereHome h2banniere={""} imageBanniere={imageBanniereAbout} />
      <section className="aboutCollapse">
        <Collapse2
          titre={"Fiabilité"}
          contenu={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse2
          titre={"Respect"}
          contenu={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse2
          titre={"Service"}
          contenu={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
        <Collapse2
          titre={"Sécurité"}
          contenu={
            "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          }
        />
      </section>
    </div>
  );
};

export default About;
