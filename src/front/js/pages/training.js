import React, { useState } from "react";
import { CardTraining } from "../component/card_training";
import { Favorites } from "../component/favorites";
import "../../styles/training.css";

const Training = () => {
  return (
    <>
      <div className="">
        <Favorites />
      </div>
      <div className=" bg-training">
        <div className="title-view-training">
          <h1 className=" text-sm-start mb-1 ms-5">Entrenamientos</h1>
          <div>
            <p className="text-sm-start ms-5 mb-4">
              En este apartado podrás encontrar entrenamientos para que puedas
              hacer ejercicio desde cualquier parte del mundo. Puedes guardar en
              favoritos todos los entrenamientos que quieras, pinchando en el
              corazón. Una vez añadidos, aparecerán en la parte superior del
              apartado entrenamientos y permanecerán ahí mientras no los borres.
            </p>
          </div>
        </div>
        <div className="  card-training bg-transparent row row-cols-sm-12 row-cols-md-3 row-cols-lg-4">
          <CardTraining />
        </div>
      </div>
    </>
  );
};

export default Training;
