import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../auth";
import "../../styles/favorites.css";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;

  useEffect(() => {
    actions.getFavorites();
  }, []);

  const deleteFavorite = (id) => {
    fetch(process.env.BACKEND_URL + "/api/favorite", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })

      .then(() => {
        actions.getFavorites();
      })
      .catch(() => {});
  };

  return (
    <>
      {favorites.length != 0 && (
        <div className=" ">
          <div className="title-view-favorite">
            <h1 className=" text-sm-start mb-1 ms-5">Favoritos</h1>
            <div>
              <p className="text-sm-start ms-5 mb-4">
                Aquí puedes consultar tus videos favoritos y borrarlos.
              </p>
            </div>
          </div>
        </div>
      )}
      {favorites.map((favorite) => {
        return (
          <div key={favorite.id} className="">
            <div className="card-favorite-css">
              <a href={favorite.url} target="_blank">
                <img
                  src={favorite.url_image}
                  className=" img-favorite "
                  alt="training"
                />
              </a>

              <div className="card-body">
                <a
                  className="card-title text-decoration-none titulovideo"
                  href={favorite.url}
                >
                  {favorite.title}
                </a>
                <button
                  type="button"
                  className="btn btn-warning mt-5"
                  onClick={() => deleteFavorite(favorite.id)}
                >
                  Borrar favorito
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
