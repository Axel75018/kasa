import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logementJson from "../../data/logements.json";
import Carousel from "../../components/carousel/Carousel";
import Collapse2 from "../../components/collapse/Collapse2";

const Logements = () => {
  const arrayNotes = [1, 2, 3, 4, 5];
  const { id } = useParams();
  const navigate = useNavigate();
  const logement = logementJson.find((logement) => logement.id === id);

  useEffect(() => {
    // Ce hook est exécuté à chaque fois que le composant est rendu
    // redirige vers la page 404 si l'ID du logement n'est pas valide
    if (!logement) {
      // Si logement undefined, on redirige vers la page 404
      navigate("/404");
    }
  }, [logement, navigate]);
  // Si logement ou navigate change, le hook sera à nouveau exécuté

  if (!logement) {
    return null;
    // Si l'ID du logement n'est pas valide, le composant ne rend rien
    //pour éviter un rendu ou une avant la redirection
  } else {
    // Si l'ID est valide on peux travailer sur le logement
    const splitNom = logement.host.name.split(" ");

    return (
      <div>
        <article>
          <Carousel pictures={logement.pictures} />
          {/* / Passe les tableaux images du logement au composant Carousel */}

          <section className="logementInfos">
            <div className="titreLieuxTag">
              <h1>{logement.title}</h1>
              <h3>{logement.location}</h3>
              <ul>
                {logement.tags.map((tag, index) => (
                  <li key={index}>
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nomPhotoNotes">
              <div className="nomPhoto">
                <ul className="Nom">
                  {splitNom.map((nomDecompose, index) => (
                    <li key={index}>
                      <span>
                        {nomDecompose}
                        <br />
                      </span>
                    </li>
                  ))}
                </ul>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>

              <div className="notes">
                {arrayNotes.map((Notes, index) => (
                  <span
                    key={index}
                    className={`note ${
                      logement.rating - Notes >= 0 ? "etoile" : "etoilegrise"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </section>

          <section className="logementCollapse">
            <Collapse2 titre={"Description"} contenu={logement.description} />

            <Collapse2
              titre={"Équipements"}
              contenu={
                <ul>
                  {logement.equipments.map((equipement, index) => (
                    <li key={index}>{equipement}</li>
                  ))}
                </ul>
              }
            />
          </section>
        </article>
      </div>
    );
  }
};

export default Logements;
