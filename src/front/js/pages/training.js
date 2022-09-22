import React, { useState } from "react";
import { CardTraining } from "../component/card_training";
import { Favorites } from "../component/favorites";

const Training = () => {
  const [refresh, setRefresh] = useState(true);
  const refreshFav = () => {
    setRefresh(true);
  };
  const onRefresh = () => {
    setRefresh(false);
  };
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
