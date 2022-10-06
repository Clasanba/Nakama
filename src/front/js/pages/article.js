import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";
import "../../styles/articles.css";

const Article = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="bg-articles">
        <div className="title-view-articles bg-gradient border  rounded rounder-4">
          <h1 className="text-sm-start mb-3 ms-4">Artículos</h1>
          <div>
            <p className="text-sm-start ms-5 mb-4">
              En este apartado puedes encontrar artículos científicos sobre el
              cáncer y los últimos tratamientos.
            </p>
          </div>
        </div>
        <div className="card-articles bg-transparent row row-cols-sm-12 row-cols-md-3 row-cols-lg-4">
          <Cards articles={store.article} />
        </div>
      </div>
    </>
  );
};

export default Article;
