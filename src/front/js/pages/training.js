import React from "react";
import { CardTraining } from "../component/card_training";
import { Favorites } from "../component/favorites";
import "../../styles/training.css";
import "../../styles/favorites.css";

const Training = () => {
  return (
    <>
      <div className=" bg-training">
        <div className="title-view-training bg-gradient border  rounded rounder-4">
          <h1 className=" text-sm-start mb-3 ms-4 ">Entrenamientos</h1>
          <p className="text-sm-start ms-5 mb-3">
            En este apartado podrás encontrar entrenamientos para que puedas
            hacer ejercicio desde cualquier parte del mundo. Puedes guardar en
            favoritos todos los entrenamientos que quieras, pinchando en el
            corazón. Una vez añadidos, aparecerán en la parte superior del
            apartado entrenamientos y permanecerán ahí mientras no los borres.
          </p>
        </div>
        <div className="container">
          <div className="bg-transparent row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <CardTraining />
          </div>
        </div>
      </div>
      <Favorites />
    </>
  );
};

export default Training;
