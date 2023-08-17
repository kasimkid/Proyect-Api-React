import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from "../store/appContext";
import Formulario from "../component/Formulario";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  useEffect(() => {
    actions.detailContact(params.id);
  }, []);
  const { full_name, email, phone, address } = store.contact;


  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center"> Edit Contact: {full_name}</h3>
          <div className="d-flex justify-content-center">
            <Formulario />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
