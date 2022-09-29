import React from "react";
import cards from "../../styles/cards.css";

const Cards = ({ articles }) => {
  return articles.map((item) => {
    return (
      <article className="m-2" key={item.id}>
        <div className="card h-100 ">
          <img src={item.image} className="image-card card-img-top" />
          <div className="card-body ">
            <h5 className="card-title text-info">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.url} target="_blank" className="btn btn-outline-info">
              Leer más
            </a>
          </div>
        </div>
      </article>
    );
  });
};

export default Cards;
