import gardenImg from "../images/cg6.jpeg";
import { useParams, Navigate, Params} from "react-router-dom";
import { useState, setState } from "react";
import { useEffect } from "react";

const CommunityLanding = () => {
  const { info } = useParams();
  console.log(info)
  let userInfoArray = info.split("_");
  let id = userInfoArray[0];
  console.log(id)
  let city = userInfoArray[1];
  console.log(city)
  let user = userInfoArray[2];
  console.log(user)
  let garden = userInfoArray[3];
  console.log(garden)

  const [gardenData, setGardenData] = useState([]);
  const [gardenRules, setGardenRules] = useState([]);
  const [gardenAnnouncements, setGardenAnnouncements] = useState([]);

  const fetchGardenData = async () => {
    const url = `https://community-garden-api.onrender.com/gardens`;
    const response = await fetch(url);
    const data = await response.json();
    setGardenData(data);
  };
  const findRules = (garden) => {
    gardenData.forEach((gardenSpace) => {
      if (gardenSpace.name === garden) {
        console.log("found it");
        setGardenRules(gardenSpace.rules);
        console.log(...gardenRules);
        console.log(gardenAnnouncements);
        setGardenAnnouncements(gardenSpace.announcements);
        console.log(gardenAnnouncements);
      }
    });
  };

  useEffect(() => {
    fetchGardenData();
    console.log(gardenData);
  }, []);

  useEffect(() => {
    if (gardenData.length > 0) {
      findRules(garden);
    }
  }, [gardenData]);

  console.log(gardenRules);
  if (!gardenRules) {
    return <div>Loading...</div>;
  }
  return (
    <div className="communityLanding">
       <h2 className="communityTitle">Welcome, {user}</h2>
       <h1>{garden}</h1>
      <div className="communityImgBox">
        <img className="communityImg" src={gardenImg} />
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
  );
};
export default CommunityLanding;
