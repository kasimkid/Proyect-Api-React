import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Alerta from "./Alerta";

const Formulario = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const datos = store.contact

  const params = useParams();

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [alert, setAlert] = useState({});


  useEffect(() => {
    if (params.id) {
      setFullName(datos.full_name)
      setEmail(datos.email)
      setPhone(datos.phone)
      setAddress(datos.address)

    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([full_name, email, phone, address].includes("")) {
      console.log("DATOS OBLIGATORIOS");
      setAlert({ msg: "Todos los datos son obligatorios", error: true })
      return;
    }
    setAlert({})

    if (params.id) {
      actions.editarContacto(params.id, { full_name, email, phone, address })
      await actions.obtenerAgenda();
      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
      navigate("/");


    } else {
      actions.crearContacto({ full_name, email, phone, address });
      await actions.obtenerAgenda();

      setFullName("");
      setEmail("");
      setPhone("");
      setAddress("");
      navigate("/");

    }

  };
  const { msg } = alert
  console.log(alert)
  return (
    <div className="col-md-8">
      {
        msg && <Alerta alert={alert} />
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor="Input1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Full_name"
          value={full_name}
          name="full_name"
          onChange={(e) => setFullName(e.target.value)}
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
          onChange={(e) => setEmail(e.target.value)}
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
          onChange={(e) => setPhone(e.target.value)}
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
          onChange={(e) => setAddress(e.target.value)}
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
      </form>
    </div>
  );
};

export default Formulario;
