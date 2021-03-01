import {useEffect, useState} from 'react'
import axios from 'axios'

const Roadster = () =>{
    const [roadster, setRoadster] = useState({})

    useEffect(()=>{
        const fetchRoadster = async()=>{
            const reponse = await axios.get('https://api.spacexdata.com/v4/roadster')
            const data = await reponse.data 
            const {name, launch_mass_kg, orbit_type, wikipedia, details} = data
            setRoadster({
                name, 
                mass: launch_mass_kg,
                orbit: orbit_type,
                link: wikipedia,
                details: details
            })
            }
            fetchRoadster()
        }, [])

        return(
            <div>
                Name: <a href={roadster.link}>{roadster.name}</a><br/>
                Mass: {roadster.mass}<br/>
                Orbit Type: {roadster.orbit}<br/>
                More Info: <textarea disabled>{roadster.details}</textarea>
            </div>
        )
}

export default Roadster