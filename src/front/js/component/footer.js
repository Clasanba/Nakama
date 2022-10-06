import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="  py-3 text-center  footer ">
        <div className="item-footer ">
          <a
            href="https://www.facebook.com/profile.php?id=100085517563751"
            target="_blank"
          >
            <i className="fa-brands icons-footer fa-square-facebook me-3 fs-2 text-with-color "></i>
          </a>
          <a href="https://www.instagram.com/comunidadnakama/" target="_blank">
            <i className="fa-brands icons-footer fa-instagram me-3 fs-2 text-with-color"></i>
          </a>
          <a href="https://twitter.com/Nakama_2022 " target="_blank">
            <i className="fa-brands icons-footer fa-twitter me-3 fs-2 text-with-color"></i>
          </a>
          <a href="mailto:comunidadnakama@gmail.com" target="_blank">
            <i className="fa-regular icons-footer fa-envelope me-3 fs-2 text-with-color"></i>
          </a>
        </div>
      </footer>
    </>
  );
};
