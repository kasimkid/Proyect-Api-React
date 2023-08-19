import React from "react";
import "../../styles/home.css";
import Listado from "./ListadoPersonajes";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <Link to="/listado-personajes"> Ir a Listado Personajes
      <hr />
    </Link>
    <Link to="/location">Localizacion</Link>
    <div className="text-center mt-5">
      <h1 className="">Rick And Morty</h1>
      <Listado />
    </div>
  </>
);
