import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";

const Psychology = () => {
  const { store } = useContext(Context);
  return (
    <>
      <h1 className="text-success text-center mt-5 mb-5">Psicología</h1>

      <div className=" row row-cols-12 row-cols-md-4  ">
        <Cards articles={store.psychology} />
      </div>
    </>
  );
};

export default Psychology;
