import { useState, useEffect } from 'react'
import axios from 'axios'
import Payload from './Payload'
import {Link} from 'react-router-dom'

const PayloadUnitContainer = () => {
    const [payloads, setPayloads] = useState([])
    
    
    useEffect(() => {
        const fetchPayloads = async () => {
            const response = await axios.get('https://api.spacexdata.com/v4/Payloads');
            const data = response.data;
            // console.log(data);
            // destructuring
            setPayloads(data);
        }
        fetchPayloads();
    }, [])

    const payloadList = payloads.map((payload, index) => {
        return <Payload payload={payload} key={index} />

    });

    return (
        <div>
            {payloadList}
        </div>
    )
}

export default PayloadUnitContainer;