import { useState, setState } from 'react'
import { useEffect } from 'react'
import { params } from 'react'
import { useParams } from 'react-router-dom'

const LocalGardens = () => {

    const { city } = useParams()
    console.log(city)
    const [ gardenList, setGardenList ] = useState([])
    
    const fetchGardenData = async (city) => {

        const url = `https://community-garden-api.onrender.com/gardens/${city}`
        const response = await fetch(url)
        const  data  = await response.json()
        setGardenList(data)
    }

    useEffect(()=>{
        fetchGardenData(city)
        console.log(gardenList)
    },[])
    if(!gardenList){
        return(<div>Loading...</div>)
    }
    return(
        <div className="localGardenContainer">
                    <h1>Community Gardens in {city}</h1>
                    <h2>Choose your garden.</h2>
                    
                    <ul className="gardenList">
                        {gardenList.map(gardens=>{
                            return(
                                <div>
                                <input type="checkbox" id={gardens.name} name={gardens.name} value={gardens.name} key = {gardens.id}/>
                                <label htmlFor={gardens.name}>{gardens.name}</label>
                                </div>
                            )
                            
                        })}
                    </ul>
                    <div  className="exit"><i className='bx bx-x'></i></div> 
            </div>
    )
}
export default LocalGardens