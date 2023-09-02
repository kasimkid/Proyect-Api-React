import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PersonDetail = () => {
  const { store, actions } = useContext(Context);

  const { name, image, species, type, status, gender } = store.character;

  const params = useParams();

  useEffect(() => {
    actions.detailPerson(params.id);
  }, []);

  if (store.cargando) return "Cargando...";

  return (
    <div>
      <h1>Reseña</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title"> Nombre: {name}</h3>
              <p className="card-text">Status: {status}</p>
              <p className="card-text">Especie: {species}</p>
              <p className="">Tipo: {type}</p>
              <p className="">Genero: {gender}</p>
            </div>
            <button>
              <i className="bi bi-star"></i>
            </button>
            <Link to="/listado-personajes">Back</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
