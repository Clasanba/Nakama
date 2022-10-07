import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoconsombra from "../../img/logoconsombra.png";
import "../../styles/navBar.css";
import { deleteToken } from "../auth";
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
        { link: "/profile", title: "Perfil usuario" },
        {
          title: "Cierre sesión",
          onclick: (e) => {
            e.preventDefault();
            deleteToken();
            actions.logout();
            navigate("/");
          },
        },
      ]
    : [
        {
          title: "Registro",
          children: [
            { link: "/register", title: "Usuario" },
            { link: "/ProfessionalRegister", title: "Profesional" },
          ],
        },
        { link: "/login", title: "Inicio sesión" },
      ];

  return (
    <>
      <nav className="styleNavbar navbar navbar-expand-lg " role="search">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ">
            <img src={logoconsombra} className="logo_navBar mt-1 ms-1" />
          </Link>
          <button
            className="navbar-toggler text-with-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ">
              <i className="fa-solid fa-bars fs-1 "></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav page-nav flex-grow-1">
              {pages.map((page) => (
                <li key={page.link} className="nav-item ">
                  <Link to={page.link} className="nav-link text-with-color">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav page-nav">
              {links.map((linkPage, index) => {
                if (!linkPage.link) {
                  if (linkPage.onclick) {
                    return (
                      <li key={index} className="nav-item">
                        <a
                          href="#"
                          className="nav-link text-with-color"
                          onClick={linkPage.onclick}
                        >
                          {linkPage.title}
                        </a>
                      </li>
                    );
                  }

                  if (linkPage.children) {
                    return (
                      <li key={index} className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle text-end text-with-color"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {linkPage.title}
                        </a>
                        <ul className="dropdown-menu">
                          {linkPage.children.map((child) => {
                            return (
                              <li key={child.link}>
                                <Link
                                  to={child.link}
                                  className="dropdown-item nav-link text-with-color"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    );
                  }
                }

                return (
                  <li key={linkPage.link} className="nav-item">
                    <Link
                      to={linkPage.link}
                      className="nav-link  text-with-color "
                    >
                      {linkPage.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
