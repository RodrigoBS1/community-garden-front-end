import { useEffect, useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import GrowInfo from './GrowInfo'

const SeasonInfo = ( {season} ) =>{

    const [ veggies , setVeggies ] = useState([])

    const navigate = useNavigate()

    const toGrowInfo = (growName) =>{
        navigate(`/growinfo`)
    }

    const fetchVeggieData = (season) => {
        
        const url = `https://community-garden-api.onrender.com/plants/season/${season}`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setVeggies(data)
            
            console.log(veggies)
        })
    }

    useEffect(()=>{
        fetchVeggieData(season)
    },[])
console.log(season)

console.log(veggies)

    const goToEd = (item) =>{
        console.log(`clicked new`)
        console.log(item)
        return 
    }

    return(
        <div className="SeasonInfo">
            
            <div className="seasonSide">
                <h1>What to Grow in the {season}</h1>
                <ul>
                    {veggies.map((data)=>{
                        return(
                            <li  key = {data.id}><Link to ='/growinfo' state = {{plantName:data.name, companion:data.companion, water:data.water, zone:data.zone}}>{data.name} </Link></li>
                        )
                    })}
                </ul>
            </div>
            <div className="edSide">
                
            </div>
        </div>
    )
}
export default SeasonInfo