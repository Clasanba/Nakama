import React, { useState } from "react";
import { CardTraining } from "../component/card_training";
import { Favorites } from "../component/favorites";

const Training = () => {
  return (
    <>
      <div className=" card-group">
        <Favorites />
      </div>
      <div className=" card-group ">
        <h1>Entrenamientos</h1>
        <CardTraining />
      </div>
    </>
  );
};

export default Training;
