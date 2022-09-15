import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";

const Nutrition = () => {
  const { store } = useContext(Context);
  return (
    <>
      <h1 className="text-success text-center">Nutrición</h1>
      <div className="d-flex">
        <Cards articles={store.nutrition} />
      </div>
    </>
  );
};

export default Nutrition;
