import React from 'react';
import NominationDetails from './NominationDetails';



const NominationContainer = ({ nomination, removeNomination }) => {
    return (
        <div className=" col-sm-3 col-md-6 col-lg-4">
            { nomination.map(nominated => <NominationDetails nomination={nominated} removeNomination={removeNomination}/>) }
        </div>
    )
}
export default NominationContainer;
