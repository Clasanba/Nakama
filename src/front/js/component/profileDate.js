import React, { useContext, useEffect } from "react";
import "../../styles/index.css"
import { Context } from "../store/appContext";

const ProfileDate = () => {
  const {store, actions} = useContext(Context)

  useEffect(() => {
    actions.getDataProfile();
  }, []);

  return (
    <div className="card border-success  mt-3 d-flex justify-content-center" style={{ width: 30 + "rem", height: 17 + "rem" }}>
      <div className="card-header text-center ">{store.user.user_name}</div>
      <div className="card-body">
        <p className="card-text"> Nombre: {store.user.name}</p>
        <p className="card-text"> Primer apellido: {store.user.first_name}</p>
        <p className="card-text"> Segundo apellido: {store.user.last_name}</p>
        <p className="card-text"> Correo electrónico: {store.user.email}</p>
        <form className="d-flex justify-content-end mb-2">
        <button className="btn btn-md btn btn-outline-danger " type="delete">Eliminar cuenta</button>
        </form>          
                
      </div>
    </div>
  );
};

export default ProfileDate;
