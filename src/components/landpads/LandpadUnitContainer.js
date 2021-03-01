import axios from 'axios'
import {useState, useEffect} from 'react'
import Landpad from './Landpad'

const LandpadUnitContainer = (props) =>{
    const [landpad, setLandpad] = useState([])

    useEffect(()=>{
        const fetchLandpad = async()=>{
            const reponse = await axios.get('https://api.spacexdata.com/v4/landpads')
            const data = await reponse.data
            setLandpad(data)
        }
        fetchLandpad()
    }, [])

    const landpadList = landpad.map((landpad, index) =>{
        return <Landpad landpad={landpad} key={index}/>
    })

    return(
        <div>
            Landpad Information
            {landpadList}
        </div>
    )
}

export default LandpadUnitContainer