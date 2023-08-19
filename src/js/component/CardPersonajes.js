import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacter = ({ character }) => {
  const { name, species, image, id } = character;
  // console.log(character)

  const { store, actions } = useContext(Context);

  return (
    <>

      <div className="col-sm-6 col-md-6 col-lg-3 my-2">
        <div className="card">
          <img
            src={image}
            className="card-img-top rounded-circle  p-3"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            {/* <Link to={`/detalle-contacto/${id}`} className="btn btn-primary">
              <i className="bi bi-search"></i>
            </Link> */}
            {/* <button className="btn btn-danger ms-2">
              <i className="bi bi-trash3-fill"></i>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCharacter;
