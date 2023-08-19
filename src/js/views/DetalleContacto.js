import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import LocationCard from "../component/LocationCard";

export const DetalleContacto = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  // const { id } = useParams();

  useEffect(() => {
    actions.detailContact(params.id);
  }, []);

  if (store.cargando) return "Cargando...";

  return (
    <div>
      <h1>Detalle de contacto</h1>
      {/* <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://picsum.photos/id/237/200/200" className="" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title fs-1">{full_name}</h3>
              <p className="card-text fs-4"><i class="bi bi-envelope-fill"></i>  {email}
              </p>
              <p className="card-text">
                <span className="text-muted fs-4"><i class="bi bi-geo-alt-fill"></i>  {address}</span>
              </p>
              <p><i class="bi bi-telephone-fill fs-4"></i>  {phone}</p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/`} className="btn btn-secondary me-2">
        <i className="bi bi-arrow-left-square"></i>
      </Link>
      <Link to={`/edit-contact-form/${params.id}`} className="btn btn-primary">
        <i className="bi bi-pencil"></i>
      </Link> */}
    </div>
  );
};
