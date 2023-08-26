import React from "react";
import { Link } from "react-router-dom";


const CardLocation = ({ data }) => {
    const { name, id } = data;


    return (
        <>

            <div className="col-sm-6 col-md-6 col-lg-3 my-2">
                <div className="card">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rick_and_Morty_title_card_%28cropped%29.png/800px-Rick_and_Morty_title_card_%28cropped%29.png"
                        className="card-img-top rounded-circle  p-3"
                        alt="..."
                    />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <Link to={`/detalle-localizacion/${id}`} className="btn btn-primary">
                            <i className="bi bi-search"></i>
                        </Link>
                        <button><i className="bi bi-star"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardLocation;
