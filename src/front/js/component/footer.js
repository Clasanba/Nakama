import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="  py-3 text-center  footer container-fluid">
      <div className="copy-name ">
          <p className=" fw-bold  m-0 mt-2"> &copy; <a href="https://www.linkedin.com/in/claudia-sandubete-bautista-76287b53/" target="_blank" className="linkedin">Claudia Sandubete </a> & <a href="https://www.linkedin.com/in/noe-sola/" target="_blank" className="linkedin"> Noe Sola</a>  </p>
        </div>
        <div className="item-footer ">
          <a
            href="https://www.facebook.com/profile.php?id=100085517563751"
            target="_blank"
          >
            <i className="fa-brands icons-footer fa-square-facebook me-3 fs-3 text-with-color "></i>
          </a>
          <a href="https://www.instagram.com/comunidadnakama/" target="_blank">
            <i className="fa-brands icons-footer fa-instagram me-3 fs-3 text-with-color"></i>
          </a>
          <a href="https://twitter.com/Nakama_2022 " target="_blank">
            <i className="fa-brands icons-footer fa-twitter me-3 fs-3 text-with-color"></i>
          </a>
          <a href="mailto:comunidadnakama@gmail.com" target="_blank">
            <i className="fa-regular icons-footer fa-envelope me-3 fs-3 text-with-color"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
