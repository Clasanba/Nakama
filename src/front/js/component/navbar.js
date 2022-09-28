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
      <nav className="styleNavbar " role="search">
        <div>
          <Link to="/" className="navbar-brand  ">
            <img src={logoNakama1} className="logo_navBar mt-1 ms-1" />
          </Link>
        </div>
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
      </nav>
    </>
  );
};
