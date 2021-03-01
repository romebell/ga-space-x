import { useEffect, useState } from 'react'
import axios from 'axios';
import React from 'react';

const Core = async() => {

    const [cores, setCores] = useState([]);

    useEffect(() => {
        const fetchCore = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/cores') 
            const data = response.data
            //console.log(data)
            setCores(data)
        };
        fetchCore();

    }, []);
   
    const coreList = cores.map((core, index) => {
        return <Core key={index} core={core} />
    })

    return (
        <ul>
           {coreList}
        </ul>
    );
}

export default Core;
