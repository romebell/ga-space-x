import { useState, useEffect } from 'react'
import axios from 'axios'
import Dragon from './Dragon'

const DragonUnitContainer = () => {
    const [dragons, setDragons] = useState([])
    
    
    useEffect(() => {
        const fetchDragons = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/dragons');
            const data = response.data;
            // console.log(data);
            // destructuring
            setDragons(data);
        }
        fetchDragons();
    }, [])

    const dragonList = dragons.map((dragon, index) => {
        return <Dragon dragon={dragon} key={index} />
    });

    return (
        <div>
            {dragonList}
        </div>
    )
}

export default DragonUnitContainer;