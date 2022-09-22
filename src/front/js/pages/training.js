import React from "react";
import { CardTraining } from "../component/card_training";
import { Favorites } from "../component/favorites";

const Training = () => {
  return (
    <>
      <h1>Favoritos</h1>
      <Favorites />
      <h1>Entrenamientos</h1>
      <CardTraining />
    </>
  );
};

export default Training;
