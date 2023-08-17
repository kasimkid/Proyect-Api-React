import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleContacto = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.detailContact(params.id);
  }, []);
  const { full_name, email, phone, address } = store.contact;

  if (store.cargando) return "Cargando...";

  return (
    <div>
      <h1>Detalle de contacto</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://picsum.photos/id/237/200/200" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{full_name}</h3>
              <p className="card-text">{email}
              </p>
              <p className="card-text">
                <span className="text-muted">{address}</span>
              </p>
              <p>{phone}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/`} className="btn btn-secondary me-2">
        <i className="bi bi-arrow-left-square"></i>
      </Link>
      <Link to={`/edit-contact-form/${params.id}`} className="btn btn-primary">
        <i className="bi bi-pencil"></i>
      </Link>
    </div>
  );
};

// Single.propTypes = {
//   match: PropTypes.object,
// };
