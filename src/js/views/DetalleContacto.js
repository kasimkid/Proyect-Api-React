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
  const { full_name } = store.contact;

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
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
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
