import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

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
import UseDataModificate from "./pages/user_data_modification";
import ProtectedRoute from "./component/protectedRouted";
import ProfessionalRegister from "./pages/professionalRegister.js";
import classNames from "classnames";

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div
      className={classNames("layout", {
        "main-home": isHome,
      })}
    >
      {children}
    </div>
  );
};

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <MainLayout>
        <Navbar />
        <main className="layout-main">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ProtectedRoute />}>
              <Route element={<Training />} path="/training" />
              <Route element={<Profile />} path="/profile" />
              <Route
                element={<UseDataModificate />}
                path="/profile/modificate"
              />
            </Route>
            <Route element={<RegisterUser />} path="/register" />
            <Route
              element={<ProfessionalRegister />}
              path="/ProfessionalRegister"
            />
            <Route element={<LoginView />} path="/login" />
            <Route element={<Psychology />} path="/psychology" />
            <Route element={<Nutrition />} path="/nutrition" />
            <Route element={<Article />} path="/article" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </main>
        <Footer />
      </MainLayout>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
