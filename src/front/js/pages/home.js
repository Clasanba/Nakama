import React from "react";

import logoNakama from "../../img/Logo_Nakama-removebg.png"
import logoNakama1 from "../../img/logo_corregido.png";
import "../../styles/home.css";
import { isLoggedIn } from "../auth";

const Home = () => {
  const hasLogin = isLoggedIn();

  return (
    <div className="d-flex justify-content-center  body-home">
      <figure className="card border-0  figure-body mt-3" style={{ width: 40 + "rem" }}>
      
        <div className="img-container ">
        <img
          src={logoNakama1}
          className="card-img-top logo_nakamaHome mb-2"
          alt="logo_nakama"
        />
        </div>
        <p className="letters text-center m-0">NAKAMA</p>
        <figcaption className="card-body">
          <div className="description p-1">
          <p className="card-text text-center detail">
            Somos una comunidad dirigida a personas relacionadas directa o
            indirectamente con el cáncer, a través de la cual, puedan aprender
            aspectos sobre el día a día de la enfermedad más allá del propio
            diagnóstico. Aquí encontraran información sobre alimentación,
            aspectos psicológicos, avances médicos e investigaciones y
            entrenamientos para favorecer una mejor calidad de vida.
          </p>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
export default Home;
