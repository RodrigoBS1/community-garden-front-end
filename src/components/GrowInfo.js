import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const GrowInfo = ({ name,companionPlants,watering,zones }) => {

    const location =useLocation()
    const { plantName, companion, water, zone } = location.state
//console.log(name)
console.log(plantName)
    const [ growItem , setGrowItem ] = useState([
    //     {
    //     data: [
    //         {
    //             type: "crops",
    //             id: "542e9cdf6331360002b21000",
    //             attributes: {
    //                 name: "Watermelon",
    //                 slug: "watermelon",
    //                 binomial_name: "Citrullus lanatus",
    //                 common_names: [
    //                     "watermelon"
    //                 ],
    //                 description: "The watermelon is a species of melon that produces round or oblong fruits with thick skin and sweet, watery flesh. It is a special kind of berry with a hard rind and no internal division, botanically known as a \"pepo.\" The rind is usually dark green with light-green stripes. The flesh can be red or yellow. Like other melons and members of the Cucurbitaceae family, the watermelon grows on sprawling vines.",
    //                 sun_requirements: "Full Sun",
    //                 sowing_method: "Direct seed into soil or peat pots (and transplant pots directly into soil after hardening off)",
    //                 spread: 200,
    //                 row_spacing: 300,
    //                 height: 50,
    //                 processing_pictures: 0,
    //                 guides_count: 0,
    //                 main_image_path: "https://s3.amazonaws.com/openfarm-project/production/media/pictures/attachments/591e1e22dfdcf50004000001.jpg?1495146011",
    //                 "taxon": "Species",
    //                 "tags_array": [],
    //                 "growing_degree_days": null,
                    
    //             },
                
    //             }
            
    //     ]
    // }
])
    //const [ item , setItem ] = useState(growItem[0].data[0].attributes)
    const [item , setItem ] = useState({})
    const fetchItemData = (name) => {
        
        // const url = `https://www.growstuff.org/crops/${name}.json`
        const url = `https://openfarm.cc/api/v1/crops/?filter=${plantName}`
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setGrowItem(data.data)
            
            console.log('growItem',growItem)
            //console.log(growItem[0].data[0].attributes)
            setItem(growItem[0].attributes)
            console.log('item',item)
            // console.log(item.description)
            // console.log(item.main_image_path)
            // console.log(item.sowing_method)
            // console.log(item.binomial_name)
            console.log(item)
            
        })
    }
    // console.log(growItem)
    // console.log(growItem[0])
    // console.log(growItem[0].attributes)
    // // console.log(item)
    // // console.log(item.name)

    useEffect(()=>{
        fetchItemData(name)
    },[])




    

    return(
        <div className="fullScreen">
            <div className="GrowInfoCard">
                <div className="growImgBox">
                    <img 
                    className="growImg" 
                    src={item.main_image_path}
                    />
                </div>
                <h1>{item.name}</h1>
                <h3>Botanical Name:</h3>
                <p>{item.binomial_name}</p>
                <h3>Description:</h3>
                <p>{item.description}</p>
                <h3>Growing Zones:</h3>
                <p>{zone}</p>
                <h3>Sowing Method:</h3>
                <p>{item.sowing_method}</p>
                <h3>Watering Requirements:</h3>
                <p>{water}</p>
                <h3>Companion Plants:</h3>
                <p>{companion}</p>
            
                
    

            </div> 
        </div>
    )
}
export default GrowInfo