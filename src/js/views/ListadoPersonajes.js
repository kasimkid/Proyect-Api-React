import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import CardCharacter from "../component/CardPersonajes";

const Listado = () => {
  const { store, actions } = useContext(Context);
  const charactersList = store.characters;
  // console.log(charactersList)
  // useEffect(() => {
  //   actions.obtenerAgenda();
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-end">
          <Link></Link>
        </div>
      </div>
      <div className="row">
        {charactersList.length > 0 ? (
          charactersList.map((character) => (
            <CardCharacter key={character.id} character={character} />
          ))
        ) : (
          <h1>No hay contactos</h1>
        )}
      </div>
    </div>
  );
};

export default Listado;
