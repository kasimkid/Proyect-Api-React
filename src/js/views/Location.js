import React, { useContext, useEffect } from "react";
import LocationCard from "../component/LocationCard";
import { Context } from "../store/appContext";

const Location = () => {
    const { store, actions } = useContext(Context);
    const locationList = store.location;

    useEffect(() => {
        actions.getLocation();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-end"></div>
            </div>
            <div className="row">
                {locationList.length > 0 ? (
                    locationList.map((location) => (
                        <LocationCard key={location.id} location={location} />
                    ))
                ) : (
                    <h1>Vacio</h1>
                )}
            </div>
        </div>
    );
};

export default Location;
