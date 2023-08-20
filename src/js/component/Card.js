import React from "react";
import { Link } from "react-router-dom";


const Card = ({ data }) => {
    const { name, image, id } = data;
    console.log()

    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rick_and_Morty_title_card_%28cropped%29.png/800px-Rick_and_Morty_title_card_%28cropped%29.png"
    return (
        <>

            <div className="col-sm-6 col-md-6 col-lg-3 my-2">
                <div className="card">
                    <img
                        src={image !== undefined ? image : imageUrl}
                        className="card-img-top rounded-circle  p-3"
                        alt="..."
                    />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <Link to={`/detalle-contacto/${id}`} className="btn btn-primary">
                            <i className="bi bi-search"></i>
                        </Link>
                        <button><i className="bi bi-star"></i></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
