import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Formulario from "../component/Formulario";

const AddContactForm = () => {
  return (
    <>
      <div className="row d-flex justify-content-center">
        <h3 className="text-center">Add a New Contact</h3>
        <Formulario />
      </div>
    </>
  );
};

export default AddContactForm;
