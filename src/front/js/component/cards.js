import React from "react";
import "../../styles/cards.css";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const Cards = ({ articles }) => {
  const location = useLocation();
  return articles.map((item) => {
    return (
      <article className="m-2 col" key={item.id}>
        <div className=" card-css">
          <a href={item.url} target="_blank">
            <img src={item.image} className=" image-card card-img-top" />
          </a>
          <div className="card-body ">
            <a href={item.url} target="_blank" className="text-decoration-none">
              <h5
                className={classNames(
                  {
                    "title-nutrition": location.pathname === "/nutrition",
                    "title-psychology": location.pathname === "/psychology",
                    "title-articles": location.pathname === "/article",
                  },
                  "bg-gradient"
                )}
              >
                {item.title}
              </h5>
            </a>
            <p className="card-text">{item.description}</p>
          </div>
        </div>
      </article>
    );
  });
};

export default Cards;


