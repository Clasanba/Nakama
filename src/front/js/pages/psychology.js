import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";
import "../../styles/psychology.css";

const Psychology = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="bg-psychology">
        <div className="title-view-psychology bg-gradient border  rounded rounder-4">
          <h1 className=" text-sm-start mb-3 ms-4">Psicología</h1>
          <div>
            <p className="text-sm-start ms-5 mb-4">
              Cuando el cáncer aparece en nuestras vidas, es normal sentirse
              abrumado y no saber como actuar ante ciertas circunstancias o como
              gestionar nuestras emociones. Para ayudarte con ello, en este
              apartado podrás encontrar información psicológica, procedente de
              profesionales, para que puedas resolver todas tus dudas.
            </p>
          </div>
        </div>

        <div className="card-psychology bg-transparent row row-cols-sm-12 row-cols-md-3 row-cols-lg-4 ">
          <Cards articles={store.psychology} />
        </div>
      </div>
    </>
  );
};

export default Psychology;
