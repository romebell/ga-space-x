import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'

const Dragon = () => {

    const [dragons, setDragons] = useState([]);

    useEffect(() => {
       const fetchDragon = async () => {
        const response = await axios.get('https://api.spacexdata.com/v4/dragons')
        const data = response.data;
        setDragons(data)
       }

       fetchDragon()
    }, []);

    const dragonList = dragons.map((dragon, index) => {
        return <p key={index}>{dragon.description}</p>
    })

    const dragonImg = dragonList.map((dragon, index)=> {
        return <img key={index} src='{dragon.flickr_images}'/>
    })


    return (
        <div>
            {dragonList}
            {dragonImg}
        </div>
    );
}

export default Dragon;
