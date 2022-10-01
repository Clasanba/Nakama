import React from "react";
import cards from "../../styles/cards.css";
import { Link, useLocation } from "react-router-dom";

const Cards = ({ articles }) => {
  return articles.map((item) => {
    /*const location = useLocation();*/
    return (
      <article className="m-2" key={item.id}>
        <div className=" h-100 card-css">
          <a href={item.url} target="_blank">
            <img src={item.image} className=" image-card card-img-top" />
          </a>
          <div className="card-body ">
            <a href={item.url} target="_blank" className="text-decoration-none">
              <h5 className="card-title text-info">{item.title}</h5>
            </a>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      </article>
    );
  });
};

export default Cards;
/*{classNames(
              {
                "title-nutrition":{location.nutrition}, 
                "title-psychology":{location.psychology},
                "title-articles":{location.article},
              
              }*/
