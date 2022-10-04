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

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="bg-favorite">
      <div className="title-view-favorite">
        <h1 className=" text-sm-start mb-1 ms-5">Favoritos</h1>
        <p className="text-sm-start ms-5 mb-4">
          Aquí puedes consultar tus videos favoritos y borrarlos.
        </p>
      </div>
      <div className="row row-cols-sm-12 row-cols-md-3 row-cols-lg-4">
        {favorites.map((favorite) => {
          return (
            <div key={favorite.id} className="">
              <div className="card-favorite-css">
                <div>
                  <a href={favorite.url} target="_blank">
                    <img
                      src={favorite.url_image}
                      className=" img-favorite "
                      alt="training"
                    />
                  </a>

                  <a
                    className="card-title text-decoration-none titulovideo"
                    href={favorite.url}
                  >
                    {favorite.title}
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => deleteFavorite(favorite.id)}
                >
                  Borrar favorito
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
