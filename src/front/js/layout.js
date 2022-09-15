import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./pages/home";
import Training from "./pages/training";
import RegisterUser from "./pages/registerUser";
import LoginView from "./pages/login";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Psychology from "./pages/psychology";
import Nutrition from "./pages/nutrition";
import Article from "./pages/article";
import Profile from "./pages/profile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <main className="layout-main">
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Training />} path="/training" />
              <Route element={<RegisterUser />} path="/register" />
              <Route element={<LoginView />} path="/login" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<Psychology />} path="/psychology" />
              <Route element={<Nutrition />} path="/nutrition" />
              <Route element={<Article />} path="/article" />
              <Route element={<h1>Not found!</h1>} />
            </Routes>
          </main>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
