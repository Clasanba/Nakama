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
        {
          link: "/profile",
          title: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>,
        },
        {
          title: <svg data-testid="geist-icon" className="geist-icon" fill="none" height="35" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" width="35" style={{color: "#1f5046"}}><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4"/><path d="M10 17l5-5-5-5"/><path d="M15 12H3"/></svg> ,
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
        { link: "/login", title: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
      </svg>}
      ];

  return (
    <>
      <nav className="styleNavbar navbar navbar-expand-lg " role="search">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ">
            <img src={logoconsombra} className="logo_navBar mt-1 ms-3" />
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
          <div
            className="collapse navbar-collapse bg-nav-home"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav page-nav flex-grow-1 ">
              {pages.map((page) => (
                <li key={page.link} className="nav-item">
                  <Link
                    to={page.link}
                    className="nav-link text-with-color me-4"
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="navbar-nav page-nav me-2">
              {links.map((linkPage, index) => {
                if (!linkPage.link) {
                  if (linkPage.onclick) {
                    return (
                      <li key={index} className="nav-item ">
                        <a
                          href="#"
                          className="nav-link text-with-color ms-4 me-2"
                          onClick={linkPage.onclick}
                        >
                          {linkPage.title}
                        </a>
                      </li>
                    );
                  }

                  if (linkPage.children) {
                    return (
                      <li key={index} className="nav-item dropdown me-3">
                        <a
                          className="nav-link dropdown-toggle text-end text-with-color"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {linkPage.title}
                        </a>
                        <ul className="dropdown-menu ">
                          {linkPage.children.map((child) => {
                            return (
                              <li key={child.link} >
                                <Link
                                  to={child.link}
                                  className="dropdown-item nav-link text-with-color fw-bold fs-6" 
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
