import React from 'react';
import './Capsule.css'


const Capsule = (props) => {
    const { water_landings, last_update, serial, type } = props.capsule;



    return (
        <div>
            <ul>
                <li>Serial: {serial}</li>
                <li>Type: {type}</li>
                <li>Water Landings: {water_landings}</li>
                <li>Last Update: {last_update}</li>
            </ul>
        </div>
    );
}

export default Capsule;
