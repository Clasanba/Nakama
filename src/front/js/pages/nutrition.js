import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";
import "../../styles/nutrition.css";

const Nutrition = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="bg-nutrition">
        <div className="title-view-nutrition bg-gradient border  rounded rounder-4">
          <h1 className=" text-sm-start mb-3 ms-4">Nutrición</h1>
          <div>
            <p className="text-sm-start ms-5 mb-4">
              La salud comienza con la alimentación. Al igual que es necesario
              adaptar el tipo de alimentación a las distintas etapas de edad, es
              recomendable tener en cuenta ciertas condiciones especiales como,
              el estrés, la ansiedad, enfermedad, toma de medicamentos, etc. En
              este apartado encontrarás información sobre alimentación y como
              adaptarla en cada caso.
            </p>
          </div>
        </div>
        <div className="card-nutrition bg-transparent row row-cols-sm-12 row-cols-md-3 row-cols-lg-4 ">
          <Cards articles={store.nutrition} />
        </div>
      </div>
    </>
  );
};

export default Nutrition;
