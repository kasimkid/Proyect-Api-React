import React, { useContext } from "react";
import CardCharacter from "../component/CardPersonajes";
import { Context } from "../store/appContext";

const Listado = () => {
  const { store, actions } = useContext(Context);
  const charactersList = store.characters;
  actions.getCharacters();
  // console.log(charactersList)
  // useEffect(() => {
  //   actions.getCharacters();
  // }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-end">
        </div>
      </div>
      <div className="row">
        {charactersList.length > 0 ? (
          charactersList.map((character) => (
            <CardCharacter key={character.id} character={character} />
          ))
        ) : (
          <h1>Vacio</h1>
        )}
      </div>
    </div>
  );
};

export default Listado;
