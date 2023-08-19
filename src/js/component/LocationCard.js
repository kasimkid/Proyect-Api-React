import React, { useContext } from "react";
import { Context } from "../store/appContext";

const LocationCard = ({ location }) => {
  const { name, id } = location;

  const { store, actions } = useContext(Context);


  // useEffect(() => {
  //   actions.getLocation(params.id);
  // }, []);
  // const { full_name, email, phone, address } = store.contact;

  return (
    <>
      <div className="col-sm-6 col-md-6 col-lg-3 my-2">
        <div>
          <div className="card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rick_and_Morty_title_card_%28cropped%29.png/800px-Rick_and_Morty_title_card_%28cropped%29.png"
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
      </div>
    </>
  );
};

export default LocationCard;
