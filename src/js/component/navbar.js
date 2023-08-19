import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 ms-3">Api</span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <div className="dropdown">
            <button className="btn btn-success dropdown-toggle me-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Favoritos
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">

            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
