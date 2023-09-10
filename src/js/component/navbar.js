import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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
        <div className="dropdown">
          <button
            className="btn btn-success dropdown-toggle me-3"
            disabled={!store.favoritos.length && true}
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {store.favoritos.map((favorito, index) => (
              <li key={index}>
                {favorito}
                <span>
                  <i
                    className="bi bi-trash3-fill"
                    onClick={() => actions.eliminarFavoritos(favorito)}
                  ></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
