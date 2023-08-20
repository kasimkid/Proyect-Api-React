import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

const Listado = () => {
  const { store, actions } = useContext(Context);
  const charactersList = store.characters;
  actions.getCharacters();

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-end">
        </div>
      </div>
      {/* <div className="row">
        {charactersList.length > 0 ? (
          charactersList.map((character) => (
            <CardCharacter key={character.id} character={character} />
          ))
        ) : (
          <h1>Vacio</h1>
        )}
      </div> */}
      <div className="row">
        {charactersList.length > 0 ? (
          charactersList.map((character) => (
            <Card key={character.id} data={character} />
          ))
        ) : (
          <h1>Vacio</h1>
        )}
      </div>
    </div>
  );
};

export default Listado;
