import React from "react";
import { Link } from "react-router-dom";

const AddContactForm = () => {
  return (
    <>
      <Link to="/" className="btn btn-success">
        Add Contact
      </Link>
    </>
  );
};

export default AddContactForm;
