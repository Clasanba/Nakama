import React, { useContext, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { CardTraining } from "../component/card_training";
import { Favorites } from "../component/favorites";
import "../../styles/training.css";
import "../../styles/favorites.css";
import { Context } from "../store/appContext";

const Training = () => {
  const { store, actions } = useContext(Context);

  const favRef = useRef();
  useEffect(() => {
    if (store.trainingsLoaded && store.favoritesLoaded && store.scrollToFavs) {
      actions.scrollToFavs(false);

      if (store.favorites.length > 0) {
        setTimeout(
          () => favRef.current.scrollIntoView({ behaviour: "smooth" }),
          100
        );
      }
    }
  }, [store.scrollToFavs, store.trainingsLoaded, store.favoritesLoaded]);

  return (
    <>
      <div className=" bg-training">
        <div className="title-view-training bg-gradient border  rounded rounder-4">
          <h1 className=" text-sm-start mb-3 ms-4 ">Entrenamientos</h1>
          <p className="text-sm-start ms-5 mb-3">
            En este apartado podrás encontrar entrenamientos para que puedas
            hacer ejercicio desde cualquier parte del mundo. Puedes guardar en
            favoritos todos los entrenamientos que quieras, pinchando en el
            corazón. Una vez añadidos, aparecerán en la parte inferior de esta
            misma página de entrenamientos y permanecerán ahí mientras no los
            borres.
          </p>
        </div>
        <div className="container">
          <div className="bg-transparent row row-cols-1 row-cols-md-3 row-cols-lg-4">
            <CardTraining />
          </div>
        </div>
      </div>
      <div ref={favRef}>
        <Favorites />
      </div>
    </>
  );
};

export default Training;
