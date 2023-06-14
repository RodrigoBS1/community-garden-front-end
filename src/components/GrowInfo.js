import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate , Link } from 'react-router-dom'
import noImg from '../images/noImg.png'
import { useParams } from 'react-router-dom';

const GrowInfo = ({ name, companionPlants, watering, zones, seasons }) => {

    const location = useLocation()
    const { plantName, companion, water, zone, seasonSel } = location.state
    const [growItem, setGrowItem] = useState([])
    const [item, setItem] = useState({})
    let { season } = useParams()
    console.log(seasonSel)
    console.log(season)
    console.log(companionPlants)
    console.log(companion)
    console.log(plantName)
    const fetchItemData = async (name) => {

        const url = `https://openfarm.cc/api/v1/crops/?filter=${plantName}`
        const response = await fetch(url)

        const { data } = await response.json()
        
        setGrowItem(data[0].attributes)
       
    }

    useEffect(() => {
        fetchItemData(name)
    }, [])
// const chooseImg = () =>{
//     console.log(growItem.main_image_path)
//     if(growItem.main_image_path){
//         return growItem.main_image_path
//     }
//     else return noImg
// }
if(growItem.length===0){
    return(<div className="fullScreen"><h1>Loading...</h1></div>)
}
    return (
        <div className="fullScreen">
            <div className="GrowInfoCard">
                <div className="growImgBox">
                    <img
                        className="growImg"
                        src={growItem.main_image_path}
                        
                    />
                </div>
                <h1>{plantName}</h1>
                {/* <h1>{growItem.name}</h1> */}
                <h3>Botanical Name:</h3>
                <p>{growItem.binomial_name}</p>
                <h3>Description:</h3>
                <p>{growItem.description}</p>
                <h3>Growing Zones:</h3>
                <p>{zone}</p>
                <h3>Sowing Method:</h3>
                <p>{growItem.sowing_method}</p>
                <h3>Watering Requirements:</h3>
                <p>{water}</p>
                <h3>Companion Plants:</h3>
                <p>{companion}</p>
                <div className="exit"><Link to = {`/seasoninfo/${season}`} ><i className='bx bx-x'></i></Link></div>




            </div>
        </div>
    )
}
export default GrowInfo