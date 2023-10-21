import React from "react";
import "../../styles/card.css";
import { Link } from "react-router-dom";



const Card = ({ data }) => {
    const { name, image, id } = data;

    return (
        <>

            <div className="col-sm-6 col-md-6 col-lg-3 my-2">
                <div className="card ms-2">
                    <img
                        src={image}
                        className="card-img-top rounded-circle p-1 gap-2"
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

export default Card; export const Home = () => (
    <>
        <div className="text-center mt-4">
            <img src="" className="text"></img>
            <div className="container p-3">
                <div className="row">
                    <div className="col-6 image">
                        <Link to={"/listado-personajes"}><img
                            src="https://www.xtrafondos.com/wallpapers/resized/cabezas-de-rick-and-morty-8452.jpg?s=large"
                            alt="RickandMorty"
                        ></img></Link>
                    </div>

                    <div className=" col-6 image-1">
                        <Link to={"/location"}><img
                            src="https://www.xtrafondos.com/wallpapers/resized/rick-y-morty-en-el-espacio-6046.jpg?s=large"
                            alt="Universo"
                        ></img></Link>
                    </div>
                </div>
            </div>
        </div>
    </>
);

