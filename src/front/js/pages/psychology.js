import React, { useContext } from "react";
import Cards from "../component/cards";
import { Context } from "../store/appContext";
import "../../styles/psychology.css";

const Psychology = () => {
  const { store } = useContext(Context);
  return (
    <>
      <div className="bg-psychology">
        <div className="title-view-psychology">
          <h1 className=" text-sm-start mb-1 ms-5">Psicología</h1>
          <div>
            <p className="text-sm-start ms-5 mb-4">
              Es normal sentir muchas emociones diferentes cuando tienes cáncer,
              cuando alguien cercano a ti lo padece o está en un período de
              transición, como cuando una persona comienza o finaliza el
              tratamiento. En este apartado encontrarás información psicológica,
              procedente de profesionales, donde podrás resolver todas sus
              dudas.
            </p>
          </div>
        </div>

        <div className="card-psychology bg-transparent row row-cols-sm-12 row-cols-md-3 row-cols-lg-4 ">
          <Cards articles={store.psychology} />
        </div>
      </div>
    </>
  );
};

export default Psychology;
