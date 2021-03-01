import {useState, useEffect} from 'react'
import axios from 'axios'
import Payload from './Payload'

const PayloadUnitContainer = (props) =>{
    const [payloads, setPayloads] = useState([])

    useEffect(()=>{
        const fetchPayloads = async()=>{
            const reponse = await axios.get('https://api.spacexdata.com/v4/payloads')
            const data = reponse.data
            setPayloads(data)
        }
        fetchPayloads()
    }, [])

    const payloadList = payloads.map((payload, index)=>{
        return <Payload payload={payload} key={index}/>
    })

    return(
        <div>
            Space X Payloads
            {payloadList}
        </div>
    )
}

export default PayloadUnitContainer