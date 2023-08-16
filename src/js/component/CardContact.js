import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardContact = ({ contact }) => {
  const { full_name, email, address, phone, id } = contact;

  // const editionContact = (contact) => {
  //   let newContact = contact.map((el) => (contact === contact.id ? contact : el));
  //   setEditContact(newContact);
  // };

  const { store, actions } = useContext(Context);

  const deleteContact = (contact) => {
    let newListContact = contact.filter((id) => contact.id !== id);
    setEditContact(newListContact);
  };

  return (
    <div className="col-sm-6 col-md-6 col-lg-3 my-2">
      <div className="card">
        <img
          src="https://picsum.photos/id/237/200/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{full_name}</h5>
          <p className="card-text">{email}</p>
          <p className="card-text">
            <i className="bi bi-geo-alt"></i>
            {address}
          </p>
          <p className="card-text">{phone}</p>
          <Link
            to={`/detalle-contacto/${id}`}
            className="btn btn-primary"
            onClick={() => actions.detailContact(id)}
          >
            <i className="bi bi-search"></i>
          </Link>
          <button className="btn btn-danger ms-2" onClick={deleteContact}>
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContact;
