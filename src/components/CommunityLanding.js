import gardenImg from '../images/cg6.jpeg'
import { useParams } from 'react-router-dom'
import { useState, setState } from 'react'
import { useEffect } from 'react'

const CommunityLanding = () => {
   
    const { userInfo } = useParams()
    let userInfoArray = userInfo.split('_')
    let id = userInfoArray[0]
    let city = userInfoArray[1]
    let user = userInfoArray[2]
    let garden = userInfoArray[3]
   
    
    const [ gardenData, setGardenData ] = useState([])
    const [ gardenRules, setGardenRules ] = useState([])
    const [ gardenAnnouncements, setGardenAnnouncements ] = useState([])

    const fetchGardenData = async () => {
        const url = `https://community-garden-api.onrender.com/gardens`
        const response = await fetch(url)
        const  data  = await response.json()
        setGardenData(data)
        
        
       
    }
    const findRules = (garden => {
        gardenData.forEach(gardenSpace => {
            if(gardenSpace.name === garden){
            console.log('found it')
            setGardenRules(gardenSpace.rules)
            console.log(...gardenRules)
            console.log(gardenAnnouncements)
            setGardenAnnouncements(gardenSpace.announcements)
            console.log(gardenAnnouncements)
            }
        })
    })
    
    useEffect(()=>{
        fetchGardenData()
        console.log(gardenData)
      
    },[])

    useEffect(()=>{
      if (gardenData.length > 0){
        findRules(garden)
     }
    },[gardenData])

    console.log(gardenRules)
 if(!gardenRules){
    return(<div>Loading...</div>)
 }
    return(
        <div className="communityLanding">
            <h2>Welcome, {user}</h2>
            <h1>{garden}</h1>
            <div className="communityImgBox">
                <img className="communityImg" src = {gardenImg} />
            </div>
            <h3>Our Garden Rules</h3>
            {gardenRules.length > 0 ? (
        <ul>
          {gardenRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      ) : (
        <p>No rules available</p>
      )}
            
            
            
        </div>
    )
}
export default CommunityLanding