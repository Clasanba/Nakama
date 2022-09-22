import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/card_training.css";
import { getToken } from "../auth";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [refresh, setRefresh] = useState(true);

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
          setRefresh(false);
        })
        .catch(() => setShowError(true));
    }
  }, [refresh]);

  const deleteFavorite = (id) => {
    fetch(process.env.BACKEND_URL + "/api/favorite", {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + getToken(),
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
        setRefresh(true);
      })
      .catch(() => {});
  };

  return (
    <>
      {favorites.map((favorite) => {
        return (
          <div className="card cardYoutube ">
            <a href={favorite.url_image} target="_blank"></a>
            <img className="card-img-top" alt="training" />

            <div className="card-body">
              <p className="card-title text-decoration-none titulovideo">
                {favorite.title}
              </p>
              <a className="card-text text-dark" href={favorite.url}>
                {favorite.url}
              </a>
              <p className="position-absolute bottom-0 end-0 heart">
                <i className="fa-regular fa-heart"></i>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
