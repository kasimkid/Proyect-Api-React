import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailLocation = () => {
    const { store, actions } = useContext(Context);
    const { name, type, dimension } = store.location;


    const params = useParams();

    useEffect(() => {
        actions.detailLocation(params.id);
    }, []);

    if (store.cargando) return "Cargando...";

    return (
        <div>
            <h1>Reseña</h1>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://www.xtrafondos.com/wallpapers/resized/paisaje-de-rick-y-morty-9415.jpg?s=large" width="100%" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title"> Nombre: {name}</h3>
                            <p className=""> Tipo: {type}</p>
                            <p className="card-text"> Dimension: {dimension}</p>
                            <button><i className="bi bi-star" onClick={() => actions.agregarFavoritos(name)}></i></button>
                            <Link to="/location" className="btn btn-danger ms-3 mb-2">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
