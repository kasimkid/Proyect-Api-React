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

  // const { store, actions } = useContext(Context);
  // const navigate = useNavigate();

  // const params = useParams();
  // const { id } = params;
  // const datos = store.contact;

  // console.log(datos);

  // const [addContact, setAddContact] = useState({
  //   full_name: "",
  //   email: "",
  //   phone: "",
  //   address: "",
  //   agenda_slug: "rafael-araujo",
  // });
  // const [dataToEdit, setDataToEdit] = useState(datos);

  // useEffect(() => {
  //   actions.detailContact(id);
  //   console.log("SE EJECUTA");
  //   console.log("USEEFECT", dataToEdit);
  // }, []);

  // const { full_name, email, phone, address } = dataToEdit;

  // const handleChange = (e) => {
  //   setDataToEdit({ ...dataToEdit, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   actions.editarContacto(id, dataToEdit);
  //   await actions.obtenerAgenda();
  //   navigate("/");
  // };

  // if (store.cargando) return "cargando...";

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <h3 className="text-center">Edit Contact: {full_name}</h3>
          <Formulario />
          {/* <form onSubmit={handleSubmit}>
            <label htmlFor="Input1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Full_name"
              value={full_name}
              name="full_name"
              onChange={handleChange}
            />
            <label htmlFor="Input2" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Email@"
              value={email}
              onChange={handleChange}
              name="email"
            />
            <label htmlFor="Input3" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Number"
              value={phone}
              onChange={handleChange}
              name="phone"
            />
            <label htmlFor="Input4" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Address"
              value={address}
              onChange={handleChange}
              name="address"
            />
            <div className="d-flex justify-content-between">
              <Link to="/" className="btn btn-danger my-2">
                Back
              </Link>
              <button type="submit" className="btn btn-success my-2">
                Save
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default EditContact;
