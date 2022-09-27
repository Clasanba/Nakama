import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer  py-3 text-center   styleFoot ">
        <div className="container-fluid d-flex justify-content-center ">
          <a
            href="https://www.facebook.com/profile.php?id=100085517563751"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook me-3 fs-2  "></i>
          </a>
          <a href="https://www.instagram.com/comunidadnakama/" target="_blank">
            <i className="fa-brands fa-instagram me-3 fs-2"></i>
          </a>
          <a href="https://twitter.com/Nakama_2022 " target="_blank">
            <i className="fa-brands fa-twitter me-3 fs-2 "></i>
          </a>
          <a href="mailto:comunidadnakama@gmail.com" target="_blank">
            <i className="fa-regular fa-envelope me-3 fs-2 "></i>
          </a>
        </div>
      </footer>
    </>
  );
};
