import { useState, useEffect } from 'react'
import axios from 'axios'
import Core from './Core'

const CoreUnitContainer = () => {
    const [cores, setCores] = useState([])
    
    
    useEffect(() => {
        const fetchCores = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/cores');
            const data = response.data;
            // console.log(data);
            // destructuring
            setCores(data);
        }
        fetchCores();
    }, [])

    const coreList = cores.map((core, index) => {
        return <Core core={core} key={index} />
    });

    return (
        <div>
            {coreList}
        </div>
    )
}

export default CoreUnitContainer;