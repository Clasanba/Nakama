import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/card_training.css";
import { getToken } from "../auth";
import "../../styles/card_training.css";
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
      {favorites.length != 0 && <h1>Favoritos</h1>}
      {favorites.map((favorite) => {
        return (
          <div key={favorite.id} className="card cardYoutube">
            <a href={favorite.url} target="_blank">
              <img
                src={favorite.url_image}
                className="card-img-top"
                alt="training"
              />
            </a>

            <div className="card-body">
              <a
                className="card-text text-dark text-decoration-none"
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
        );
      })}
    </>
  );
};
