import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";

const Article = () => {
  const { store } = useContext(Context);
  return (
    <>
      <h1 className="text-success text-center">Artículos</h1>
      <div className="d-flex">
        <Cards articles={store.article} />
      </div>
    </>
  );
};

export default Article;
