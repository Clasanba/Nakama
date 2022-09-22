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
      <Favorites
        refresh={refresh}
        onRefresh={onRefresh}
        refreshFavs={refreshFav}
      />
      <h1>Entrenamientos</h1>
      <CardTraining refreshFavs={refreshFav} />
    </>
  );
};

export default Training;
