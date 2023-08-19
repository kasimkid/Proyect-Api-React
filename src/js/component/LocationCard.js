import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Location = ({ location }) => {
  // const { store, actions } = useContext(Context);
  const params = useParams();

  const { name, type, dimension, id } = location;
  console.log(location)

  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   actions.getLocation(params.id);
  // }, []);
  // const { full_name, email, phone, address } = store.contact;


  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 my-2">
        <div className="card">
          <img
            src=""
            className="card-img-top rounded-circle  p-3"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            {/* <Link to={`/detalle-contacto/${id}`} className="btn btn-primary">
              <i className="bi bi-search"></i>
            </Link> */}
            {/* <button className="btn btn-danger ms-2">
              <i className="bi bi-trash3-fill"></i>
            </button> */}
          </div>
        </div>
      </div>

    </>
  );
};

export default Location;
