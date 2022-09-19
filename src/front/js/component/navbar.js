import React from "react";
import { Link } from "react-router-dom";

import logoNakama1 from "../../img/logo_corregido.png";
import "../../styles/navBar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-success bg-gradient">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand ">
            <img src={logoNakama1} className="logo_navBar" />
          </Link>
          <form className="d-flex" role="search">
            <Link to="/register">
            <button
              className="bg-success text-white p-2 me-md-3 border-0 bg-opacity-10"
              type="button"
            >
              Registro usuario
            </button>
            </Link>
            <Link to="/login">
            <button
              className="bg-success text-white p-2 me-md-3 border-0 bg-opacity-10"
              type="button"
            >
              Inicio sesión
            </button>
            </Link>
          </form>
        </div>
      </nav>
      <nav className="navbar bg-success p-2 bg-opacity-50 justify-content-center">
        <div className=" ">
          <ul className="nav ">
            <li className="nav-item ">
              <Link to="/psychology" className="nav-link text-white" >
                Psicología
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/nutrition" className="nav-link text-white" >
                Nutrición
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/article" className="nav-link text-white">
                Artículos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
