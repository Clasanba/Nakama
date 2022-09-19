import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer  py-3 text-center bg-success  styleFoot ">
        <div className="container-fluid d-flex justify-content-center ">
          <a>
            <i className="fa-brands fa-square-facebook me-3 fs-2 text-white "></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram me-3 fs-2 text-white"></i>
          </a>
          <a>
            <i className="fa-brands fa-twitter me-3 fs-2 text-white"></i>
          </a>
          <a>
            <i className="fa-regular fa-envelope me-3 fs-2 text-white"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
