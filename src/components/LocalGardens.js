import { useState, setState } from 'react'
import { useEffect } from 'react'

const LocalGardens = ({city}) => {

    console.log(city)
    const [ gardenList, setGardenList ] = useState([])
    
    const fetchGardenData = async (city) => {

        const url = `https://community-garden-api.onrender.com/gardens/${city}`
        const response = await fetch(url)
        const { data } = await response.json()
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
                    <ul className="gardenList">
                        {gardenList.map((gardens)=>{
                            return(
                                <li  key = {gardens.id}>{gardenList.name}</li>
                                
                            )
                        })}
                    </ul>
                    <div  className="exit"><i className='bx bx-x'></i></div>
            </div>
    )
}
export default LocalGardens