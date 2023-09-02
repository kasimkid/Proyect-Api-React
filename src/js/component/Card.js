import React from "react";
import { Link } from "react-router-dom";


const Card = ({ data }) => {
    const { name, image, id } = data;

    return (
        <>

            <div className="col-sm-6 col-md-6 col-lg-3 my-2">
                <div className="card">
                    <img
                        src={image}
                        className="card-img-top rounded-circle  p-3"
                        alt="..."
                    />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <Link to={`/detalle-personaje/${id}`} className="btn btn-primary">
                            <i className="bi bi-search"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
