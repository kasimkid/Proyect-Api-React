import React from "react";
import { Link } from "react-router-dom";
import Favoritos from "./Favoritos";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <img
          src="https://steamuserimages-a.akamaihd.net/ugc/950718995351241361/D107C1962EEE0313BF4F524E5D2854D52701664F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
          className="logo"
        ></img>
      </Link>
      <Link to="/listado-personajes" className="links">
        Personajes
      </Link>
      <Link to="/location" className="links">
        Localizacion
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button
              className="btn btn-success dropdown-toggle me-3"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              {/* <Favoritos /> */}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
