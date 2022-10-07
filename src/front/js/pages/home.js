import React from "react";
import "../../styles/home.css";
import fondo from "../../img/fondo-nakama.jpg";

const Home = () => {
  return (
    <>
      <div className="main-image">
        <img src={fondo} />
      </div>

      <div className="container main-home">
        <div className="main-intro p-2">
          <div className="letters text-center ">NAKAMA</div>
          <p className="slogan fst-italic bg-gradient rounded-pill slogan-css text-center fw-bold">
            "El miedo se hace más pequeño en compañía"
          </p>
          <p className="section">
            Nakama nace con el fin de brindar un lugar acogedor a personas
            relacionadas directa o indirectamente con el cáncer. Aquí puedes
            obtener información sobre nutrición, aspectos psicológicos de la
            enfermedad y artículos científicos con los últimos descubrimientos.
            Además, si te registras podrás obtener planes de entrenamientos
            personalizados. Todo orientado a facilitar la adaptación al nuevo
            estilo de vida de los pacientes y sus cuidadores.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
