import React from "react";

import logoNakama from "../../img/LogoNakamaLetras.png"
import "../../styles/home.css";
import { isLoggedIn } from "../auth";

const Home = () => {
  const hasLogin = isLoggedIn();

  return (
    <div className="d-flex justify-content-center  ">
      <figure className="card border-0" style={{ width: 40 + "rem" }}>
        <img
          src={logoNakama}
          className="card-img-top logo_nakamaHome"
          alt="logo_nakama"
        />
        {!hasLogin ? "No estás logueado!" : ""}
        <figcaption className="card-body">
          <p className="card-text text-center">
            Somos una comunidad dirigida a personas relacionadas directa o
            indirectamente con el cáncer, a través de la cual, puedan aprender
            aspectos sobre el día a día de la enfermedad más allá del propio
            diagnóstico. Aquí encontraran información sobre alimentación,
            aspectos psicológicos, avances médicos e investigaciones y
            entrenamientos para favorecer una mejor calidad de vida.
          </p>
        </figcaption>
      </figure>
    </div>
  );
};
export default Home;
