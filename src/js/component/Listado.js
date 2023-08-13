import React, { useContext, useEffect } from "react";
import CardContact from "./CardContact";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Listado = () => {
  const { store, actions } = useContext(Context);
  const contactsList = store.contacts;
  useEffect(() => {
    actions.obtenerAgenda()
  }, [])

  console.log(contactsList);
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-end">
          <Link to="/add-contact-form" className="btn btn-success">
            Add Contact
          </Link>
        </div>
      </div>
      <div className="row">
        {contactsList.length > 0
          ? contactsList.map((contact) => (
            <CardContact key={contact.id} contact={contact} />
          ))
          : null}
      </div>
    </div>
  );
};

export default Listado;
