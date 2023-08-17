import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ModalConfirm from "./ModalConfirm";

const CardContact = ({ contact }) => {
  const { full_name, email, address, phone, id } = contact;

  const [show, setShow] = useState(false);

  const handleClose = async () => {
    setShow(false);
    await actions.deleteContact(id)

    await actions.obtenerAgenda()
  }
  const handleShow = () => {
    setShow(true)

  };


  const { store, actions } = useContext(Context);

  return (
    <>
      <ModalConfirm show={show} handleShow={handleShow} handleClose={handleClose} />
      <div className="col-sm-6 col-md-6 col-lg-3 my-2">
        <div className="card">
          <img
            src="https://i.pinimg.com/1200x/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg"
            className="card-img-top rounded-circle  p-3"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{full_name}</h4>
            <Link to={`/detalle-contacto/${id}`} className="btn btn-primary">
              <i className="bi bi-search"></i>
            </Link>
            <button className="btn btn-danger ms-2" onClick={handleShow}>
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContact;
