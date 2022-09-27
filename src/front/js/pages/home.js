import React from "react";

import logoNakama from "../../img/Logo_Nakama-removebg.png";
import logoNakama1 from "../../img/logo_corregido.png";
import "../../styles/home.css";
import { isLoggedIn } from "../auth";

const Home = () => {
  const hasLogin = isLoggedIn();

  return (
    <div className=" body-home  ">
      <p className="letters text-light text-left m-0 ">NAKAMA</p>
      <p className="card-text text-center detail">
        Somos una comunidad dirigida a personas relacionadas directa o
        indirectamente con el cáncer, a través de la cual, puedan aprender
        aspectos sobre el día a día de la enfermedad más allá del propio
        diagnóstico. Aquí encontraran información sobre alimentación, aspectos
        psicológicos, avances médicos e investigaciones y entrenamientos para
        favorecer una mejor calidad de vida.
      </p>
    </div>
  );
};
export default Home;
