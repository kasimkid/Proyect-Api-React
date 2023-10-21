import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Home = () => (
  <>
    <div className="text-center mt-4">
      <h1 className="">Rick And Morty</h1>
      <div className="container p-3">
        <div className="row">
          <div className="col-6 image">
            <Link to={"/listado-personajes"}><img
              src="https://www.xtrafondos.com/wallpapers/resized/cabezas-de-rick-and-morty-8452.jpg?s=large"
              alt="RickandMorty"
            ></img></Link>
          </div>

          <div className=" col-6 image">
            <Link to={"/location"}><img
              src="https://www.xtrafondos.com/wallpapers/resized/rick-y-morty-en-el-espacio-6046.jpg?s=large"
              alt="Universo"
            ></img></Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
