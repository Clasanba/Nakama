import React from "react";
import { Link } from "react-router-dom";

import logoNakama1 from "/workspace/Nakama/src/front/img/Logo_Nakama1.png";
import "../../styles/home.css";

export const Navbar = () => {
  return (
    <nav className="navbar bg-success bg-gradient">
      <div className="container-fluid ">
        <a className="navbar-brand">
          <img src={logoNakama1} id="imgnavBar" />
        </a>
        <form className="d-flex" role="search">
          <button class="btn btn-primary" type="button">
            Registro usuario
          </button>
          <button class="btn btn-primary" type="button">
            Inicio sesión
          </button>
        </form>
      </div>
    </nav>
  );
};
