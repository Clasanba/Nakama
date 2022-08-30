import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card_training.css";

export const CardTraining = () => {
  return (
    <>
      <div className="card mb-3 cardYoutube">
        <img
          src="https://i.blogs.es/30ba5b/youtube/1366_2000.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <a className="card-title text-decoration-none titulovideo">
            Título video
          </a>
          <p className="card-text text-dark">Nombre autor</p>
          <a className="position-absolute bottom-0 end-0 heart">
            <i className="fa-regular fa-heart"></i>
          </a>
        </div>
      </div>
    </>
  );
};
