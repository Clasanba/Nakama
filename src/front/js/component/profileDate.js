import React from "react";
import "../../styles/index.css"

const ProfileDate = () => {
  return (
    <div className="card border-success  mt-3 d-flex justify-content-center" style={{ width: 30 + "rem", height: 17 + "rem" }}>
      <div className="card-header text-center ">Nombre de usuario</div>
      <div className="card-body">
        <p className="card-text">Nombre:</p>
        <p className="card-text">Primer apellido:</p>
        <p className="card-text">Segundo apellido:</p>
        <p className="card-text">Correo electrónico:</p>
        <form className="d-flex justify-content-end mb-2">
        <button className="btn btn-md btn btn-outline-danger " type="delete">Eliminar cuenta</button>
        </form>          
                
      </div>
    </div>
  );
};

export default ProfileDate;
