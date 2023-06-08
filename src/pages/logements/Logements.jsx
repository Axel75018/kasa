import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementJson from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import Collapse2 from "../../components/collapse/Collapse2";

const Logements = () => {
  const { id } = useParams(); // Récupère l'ID depuis les paramètres de l'URL
  const navigate = useNavigate(); // Récupère la fonction navigate pour naviguer entre les pages
  const isValidId = logementJson.find((logement) => logement.id === id);
  const hauteurTitreCollapse = 52; // Hauteur du titre du collapse
  // check si l'ID correspond à un logement existant

  useEffect(() => {
    // Ce hook est exécuté à chaque fois que le composant est rendu
    // redirige vers la page 404 si l'ID du logement n'est pas valide
    if (!isValidId) {
      navigate("/404");
    }
  }, [isValidId, navigate]);
  // Si isValid change, le hook sera à nouveau exécuté

  if (!isValidId) {
    return null;
    // Si l'ID du logement n'est pas valide, le composant ne rend rien
    //pour éviter un rendu avant la redirection
  } else {
    // Si l'ID est valide, le composant rend le logement correspondant
    const ficheLogement = logementJson.find((logement) => logement.id === id); // Récupère les informations du logement

    return (
      <div>
        <article>
          <Carousel pictures={ficheLogement.pictures} />
          {/* / Passe les tableaux images du logement au composant Carousel */}
          <section className="logementCollapse">
            <Collapse2
              titre={"Description"}
              contenu={ficheLogement.description}
              hauteurTitreCollapse={hauteurTitreCollapse}
            />

            <Collapse2
              titre={"Équipements"}
              contenu={
                <ul>
                  {ficheLogement.equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                  ))}
                </ul>
              }
              hauteurTitreCollapse={hauteurTitreCollapse}
            />
          </section>
        </article>
      </div>
    );
  }
};

export default Logements;
