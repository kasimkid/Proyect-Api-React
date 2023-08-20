import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/Card";

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
                        <Card key={location.id} data={location} />
                    ))
                ) : (
                    <h1>Vacio</h1>
                )}
            </div>
        </div>
    );
};

export default Location;
