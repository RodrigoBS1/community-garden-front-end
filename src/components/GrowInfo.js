import { useEffect, useState } from 'react'

const GrowInfo = ({ name,companion,water,zone }) => {

    const [ growItem , setGrowItem ] = useState([])

    const fetchItemData = (name) => {
        
        const url = `https://www.growstuff.org/crops/${name}.json`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setGrowItem(data)
            
            console.log(growItem)
        })
    }

    useEffect(()=>{
        fetchItemData(name)
    },[])




    

    return(
        <div className="GrowInfo">
            <h1>{name}</h1>
            <ul>
            {growItem.map((data)=>{
                return(
                <li  key = {data.id}></li>
                )
            })}
           </ul>
            <p> </p>
        </div>
    )
    return(
        <div>

        </div>
    )
}
export default GrowInfo