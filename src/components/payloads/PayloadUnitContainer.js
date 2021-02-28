import { useState, useEffect } from 'react';
import axios from 'axios'
import Payload from './Payload'; // payload component is in the same folder

const PayloadUnitContainer = () => {
    const [payloads, setPayloads] = useState([])
        
        useEffect(() => {
            const fetchPayloads = async () => {
              const response = await axios.get('https://api.spacexdata.com/v4/payloads');
              const data = response.data; //array

              setPayloads(data)
            }
            fetchPayloads();
        }, [])
    
        console.log(payloads)
    
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