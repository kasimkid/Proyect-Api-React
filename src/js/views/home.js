import React from "react";
import "../../styles/home.css";
import Listado from "./ListadoPersonajes";
import { Link } from "react-router-dom";

export const Home = () => (
  <>
    <div className="text-center mt-5">
      <h1 className="">Rick And Morty</h1>
      <section className="images">
        <div className="picture-1">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/cabezas-de-rick-and-morty-8452.jpg?s=large"
            alt="RickandMorty"
          ></img>
        </div>

        <div className="picture-2">
          <img
            src="https://www.xtrafondos.com/wallpapers/resized/rick-y-morty-en-el-espacio-6046.jpg?s=large"
            alt="Universo"
          ></img>
        </div>
      </section>
    </div>
  </>
);
