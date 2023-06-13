import { useEffect, useState } from 'react'
import { useNavigate , Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GrowInfo from './GrowInfo'

import FallFruits from "../images/FallFruits.jpeg";
import SpringFruits from "../images/SpringFruits.jpeg";
import WinterFruits from "../images/WinterFruits.jpeg";
import SummerFruits from "../images/SummerFruits.jpeg";



const SeasonInfo = ( ) =>{

    let [ showHideSeasonInfo, setShowHideSeasonInfo ] = useState(true) 
    
    const hideSeasonInfo = () => {
        console.log('clicked to hide component')
        setShowHideSeasonInfo(false)
        navigate(`/`)
    }
    let { season } = useParams()
    console.log(season)
    console.log(showHideSeasonInfo)
    console.log(season)
    
    // const choosePic = (season) => {
    //     switch (season){
    //         case 'Fall':
    //             return FallFruits
    //             break
    //         case 'Spring':
    //             return SpringFruits
    //             break
    //         case 'Winter':
    //             return WinterFruits
    //             break
    //         case 'Summer':
    //             return SummerFruits
    //             break
    //     }
    // }

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
        setShowHideSeasonInfo(true)   
        fetchVeggieData(season)
        
        console.log('Test',showHideSeasonInfo)
    },[season])
console.log(season)

console.log(veggies)

//   console.log(choosePic(season))
  if (!showHideSeasonInfo){
    return null
}
    return(
        <div className="SeasonInfo">
            
                {/* <div className="SI_imgBox"> */}
                    {/* <img src={`${choosePic(season)}`}/> */}
                {/* </div> */}
                <div className="seasonContent">
                    <h1>What to Grow in the {season}</h1>
                    <ul className="veggieList">
                        {veggies.map((data)=>{
                            return(
                                <li  key = {data.id}><Link to ={`/growinfo/${season}`} state = {{plantName:data.name, companion:data.companion, water:data.water, zone:data.zone, seasons:season}}>{data.name} </Link></li>
                            )
                        })}
                    </ul>
                    <div onClick={hideSeasonInfo} className="exit"><i className='bx bx-x'></i></div>
            </div>
        </div>
           
       
    )
}
export default SeasonInfo