import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import Listado from "./views/ListadoPersonajes";
import Location from "./views/Location";
import { PersonDetail } from "./views/PersonDetail";
import { DetailLocation } from "./views/DetailLocation";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="container mt-2">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listado-personajes/" element={<Listado />} />
            <Route path="/location" element={<Location />} />
            <Route path="/detalle-personaje/:id" element={<PersonDetail />} />
            <Route path="/detalle-localizacion/:id" element={<DetailLocation />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
