import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNakama1 from "../../img/logo_corregido.png";
import "../../styles/navBar.css";
import { deleteToken, isLoggedIn } from "../auth";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const pages = [
    { link: "/psychology", title: "Psicología" },
    { link: "/nutrition", title: "Nutrición" },
    { link: "/article", title: "Artículos" },
  ];

  if (store.isLoggedIn) {
    pages.push({ link: "/training", title: "Entrenamientos" });
  }

  const links = store.isLoggedIn
    ? [
        { link: "/profile", title: "Perfil de usuario" },
        { link: "/logout", title: "Cierre de sesión" },
      ]
    : [
        { link: "/register", title: "Registro de usuario" },
        { link: "/ProfessionalRegister", title: "Registro de profesional" },
        { link: "/login", title: "Inicio de sesión" },
      ];

  return (
    <>
      <nav className="styleNavbar navbar-expand-lg " role="search">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ">
            <img src={logoNakama1} className="logo_navBar mt-1 ms-1" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ">
              <i className="fa-solid fa-bars fs-1 text-white "></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav ulNavbar page-nav ">
              {pages.map((page) => (
                <li key={page.link} className="nav-item ">
                  <Link to={page.link} className="nav-link text-white">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="nav ulNavbar">
              {links.map((linkPage) => (
                <li key={linkPage.link} className="nav-item">
                  <Link to={linkPage.link} className="nav-link  text-white ">
                    {linkPage.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
