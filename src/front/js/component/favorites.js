import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/card_training.css";
import { getToken } from "../auth";

export const Favorites = ({ refresh, onRefresh, refreshFavs }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (refresh) {
      fetch(process.env.BACKEND_URL + "/api/favorite", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getToken(),
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error();
          }
          return response.json();
        })
        .then((data) => {
          setFavorites(data);
          onRefresh();
        })
        .catch(() => setShowError(true));
    }
  }, [refresh]);

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
        refreshFavs();
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
              <a className="card-text text-dark" href={favorite.url}>
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
