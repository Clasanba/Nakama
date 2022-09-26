import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoNakama1 from "../../img/logo_corregido.png";
import "../../styles/navBar.css";
import { deleteToken } from "../auth";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  return (
    <>
      <nav className="  styleNavbar navbar-expand-lg navbar-expand-md navbar-expand-sm  navbar-expand">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand ">
            <img src={logoNakama1} className="logo_navBar" />
          </Link>
          <div className="d-flex" role="search">
            <ul className="nav ">
              {store.isLoggedIn ? (
                <>
                  <li className="nav-item ">
                    <Link to="/profile" className="nav-link text-white">
                      Perfil Usuario
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <a
                      href="#"
                      className="nav-link text-white"
                      onClick={(e) => {
                        e.preventDefault();
                        deleteToken();
                        actions.logout();
                        navigate("/");
                      }}
                    >
                      Cierre sesión
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle link-light" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Registro
          </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to="/register" className="nav-link text-black">Paciente</Link></li>
                    <li><Link to="/ProfessionalRegister" className="nav-link text-black">Profesional</Link></li>
                    
                       
                    
                    </ul>
                  </li>
                  <li>
                    <Link to="/login" className="nav-link text-white">
                      Inicio sesión
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar styleNavbar p-2 justify-content-center">
        <div className=" ">
          <ul className="nav ">
            {store.isLoggedIn ? (
              <>
                <li className="nav-item ">
                  <Link to="/psychology" className="nav-link text-white">
                    Psicología
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nutrition" className="nav-link text-white">
                    Nutrición
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/article" className="nav-link text-white">
                    Artículos
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/training" className="nav-link text-white">
                    Entrenamientos
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item ">
                  <Link to="/psychology" className="nav-link text-white">
                    Psicología
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nutrition" className="nav-link text-white">
                    Nutrición
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/article" className="nav-link text-white">
                    Artículos
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
