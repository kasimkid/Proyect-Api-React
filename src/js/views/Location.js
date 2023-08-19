import React, { useContext } from 'react'
import LocationCard from '../component/LocationCard';
import { Context } from '../store/appContext';

const Location = () => {
    const { store, actions } = useContext(Context);
    const location = store.locations;

    // const { name, type, dimension, id } = location;
    // console.log(location)


    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-end">
                </div>
            </div>
            <div className="row">
                {location.length > 0 ? (
                    location.map((location) => (
                        <LocationCard key={location.id} location={location} />
                    ))
                ) : (
                    <h1 className='text-center'>Localizacion</h1>
                )}
            </div>
        </div>
    )
}

export default Location;
