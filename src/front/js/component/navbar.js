import React from "react";
import { Link } from "react-router-dom";

import logoNakama1 from "/workspace/Nakama/src/front/img/Logo_Nakama1.png";
import "../../styles/navBar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-success bg-gradient">
        <div className="container-fluid ">
          <a className="navbar-brand ">
            <img src={logoNakama1} className="logo_navBar" />
          </a>
          <form className="d-flex" role="search">
            <button
              className="bg-success text-white p-2 me-md-3 border-0 bg-opacity-10"
              type="button"
            >
              Registro usuario
            </button>
            <button
              className="bg-success text-white p-2 me-md-3 border-0 bg-opacity-10"
              type="button"
            >
              Inicio sesión
            </button>
          </form>
        </div>
      </nav>
      <nav className="navbar bg-success p-2 bg-opacity-50 justify-content-center">
        <div className=" ">
          <ul className="nav ">
            <li className="nav-item ">
              <a className="nav-link text-white" aria-current="page" href="#">
                Psicología
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Nutrición
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Artículos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
